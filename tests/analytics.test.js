import test from 'node:test';
import assert from 'node:assert/strict';
import { createPortfolioAnalytics } from '../src/analytics.js';

const measurementId = 'G-ABC123DEF4';

function browser(url = 'https://vikrant-bhati.github.io/profile/?email=private@example.com#private') {
  const scripts = [];
  const cookieWrites = [];
  const cookies = new Map();
  const targetWindow = { location: new URL(url) };
  const targetDocument = {
    referrer: 'https://search.example/search?query=private#secret',
    head: { appendChild: (script) => scripts.push(script) },
    createElement: (tag) => ({ tagName: tag.toUpperCase() }),
    get cookie() { return [...cookies].map(([name, value]) => `${name}=${value}`).join('; '); },
    set cookie(value) {
      cookieWrites.push(value);
      const [pair] = value.split(';');
      const [name, cookieValue] = pair.split('=');
      if (value.includes('Max-Age=0')) cookies.delete(name);
      else cookies.set(name, cookieValue);
    },
  };
  const create = (id = measurementId) => createPortfolioAnalytics({ measurementId: id, window: targetWindow, document: targetDocument });
  const commands = () => (targetWindow.dataLayer || []).map((args) => Array.from(args));
  return { targetWindow, targetDocument, scripts, cookieWrites, cookies, create, commands };
}

test('does not initialize tags, commands, or cookies before consent; refusal stays tag-free', () => {
  const env = browser();
  const adapter = env.create();
  assert.equal(adapter.isConfigured, true);
  assert.equal(adapter.isCollecting(), false);
  assert.equal(env.targetWindow[`ga-disable-${measurementId}`], true);
  assert.equal(adapter.trackEvent('project_open', { project_id: 'twoworlds' }), false);
  assert.deepEqual(env.commands(), []);
  assert.equal(env.targetWindow.gtag, undefined);
  assert.equal(env.cookieWrites.length, 0);
  adapter.setConsent(false);
  adapter.setConsent('true');
  assert.equal(adapter.isCollecting(), false);
  assert.deepEqual(env.commands(), []);
  assert.deepEqual(env.scripts, []);
});

test('missing or malformed IDs are inert without touching globals or cookies', () => {
  for (const id of ['', undefined, null, 'G-', 'UA-123', 'g-ABC123', ' G-ABC123', 'G-ABC?x=y']) {
    const env = browser();
    const adapter = createPortfolioAnalytics({ measurementId: id, window: env.targetWindow, document: env.targetDocument });
    assert.equal(adapter.isConfigured, false);
    assert.equal(adapter.setConsent(true), false);
    assert.equal(adapter.trackEvent('resume_click'), false);
    assert.equal(adapter.isCollecting(), false);
    assert.deepEqual(env.commands(), []);
    assert.equal(env.scripts.length, 0);
    assert.equal(env.cookieWrites.length, 0);
    assert.deepEqual(Object.keys(env.targetWindow), ['location']);
  }
  assert.equal(createPortfolioAnalytics().isConfigured, false);
});

test('only the exact production HTTPS origin and portfolio paths can collect', () => {
  for (const url of [
    'http://localhost:5173/profile/',
    'https://localhost/profile/',
    'https://example.com/profile/',
    'http://vikrant-bhati.github.io/profile/',
    'https://vikrant-bhati.github.io:444/profile/',
    'https://vikrant-bhati.github.io/',
    'https://vikrant-bhati.github.io/another-project/',
    'https://vikrant-bhati.github.io/profile/private/',
  ]) {
    const env = browser(url);
    const adapter = env.create();
    assert.equal(adapter.isConfigured, false, url);
    assert.equal(adapter.setConsent(true), false, url);
    assert.equal(env.scripts.length, 0, url);
  }
  for (const path of ['/profile', '/profile/']) {
    const env = browser(`https://vikrant-bhati.github.io${path}`);
    assert.equal(env.create().setConsent(true), true);
  }
});

test('grant configures privacy defaults and automatic pageviews without a manual view', () => {
  const env = browser();
  const adapter = env.create();
  assert.equal(adapter.setConsent(true), true);
  assert.equal(adapter.isCollecting(), true);
  assert.equal(env.targetWindow[`ga-disable-${measurementId}`], false);
  assert.equal(env.scripts.length, 1);
  assert.deepEqual(env.scripts[0], {
    tagName: 'SCRIPT', async: true,
    src: `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
    referrerPolicy: 'no-referrer',
  });
  const commands = env.commands();
  assert.deepEqual(commands[0], ['consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  }]);
  const update = commands.find(([type, action]) => type === 'consent' && action === 'update');
  assert.deepEqual(update[2], {
    analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  });
  const config = commands.find(([type]) => type === 'config');
  assert.equal(config[1], measurementId);
  assert.equal(config[2].send_page_view, true);
  assert.equal(config[2].allow_google_signals, false);
  assert.equal(config[2].allow_ad_personalization_signals, false);
  assert.equal(config[2].cookie_prefix, 'vb_ABC123DEF4');
  assert.equal(config[2].cookie_path, '/profile');
  assert.equal(config[2].page_location, 'https://vikrant-bhati.github.io/profile/');
  assert.equal(config[2].page_referrer, 'https://search.example/search');
  const views = commands.filter(([type, name]) => type === 'event' && name === 'page_view');
  assert.equal(views.length, 0);
  assert.doesNotMatch(JSON.stringify(commands), /private|secret|email=/);
});

test('repeated grants and React-style reinitialization configure automatic tracking only once', () => {
  const env = browser();
  const first = env.create();
  first.setConsent(true);
  const commandCount = env.commands().length;
  first.setConsent(true);
  const second = env.create();
  assert.equal(second.isCollecting(), true);
  second.setConsent(true);
  assert.equal(env.commands().length, commandCount);
  assert.equal(env.scripts.length, 1);
  assert.equal(env.commands().filter(([type]) => type === 'config').length, 1);
  assert.equal(env.commands().filter(([type, name]) => type === 'event' && name === 'page_view').length, 0);
});

test('revocation immediately disables collection and only clears this property’s cookies', () => {
  const env = browser();
  const adapter = env.create();
  adapter.setConsent(true);
  env.cookies.set('vb_ABC123DEF4_ga', 'client');
  env.cookies.set('vb_ABC123DEF4_ga_ABC123DEF4', 'session');
  env.cookies.set('_ga_ABC123DEF4', 'legacy-session');
  env.cookies.set('_ga_OTHER', 'other-property');
  env.cookies.set('_ga', 'shared-cookie');
  env.cookies.set('vikrant-consent', 'unrelated');
  assert.equal(adapter.setConsent(false), false);
  assert.equal(adapter.isCollecting(), false);
  assert.equal(env.targetWindow[`ga-disable-${measurementId}`], true);
  assert.equal(env.cookies.has('vb_ABC123DEF4_ga'), false);
  assert.equal(env.cookies.has('vb_ABC123DEF4_ga_ABC123DEF4'), false);
  assert.equal(env.cookies.has('_ga_ABC123DEF4'), false);
  assert.equal(env.cookies.get('_ga_OTHER'), 'other-property');
  assert.equal(env.cookies.get('_ga'), 'shared-cookie');
  assert.equal(env.cookies.get('vikrant-consent'), 'unrelated');
  const last = env.commands().at(-1);
  assert.deepEqual(last, ['consent', 'update', {
    analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  }]);
  const count = env.commands().length;
  assert.equal(adapter.trackEvent('resume_click', { placement: 'footer' }), false);
  assert.equal(env.commands().length, count);
  adapter.setConsent(true);
  assert.equal(adapter.isCollecting(), true);
  assert.equal(env.scripts.length, 1);
  assert.equal(env.commands().filter(([type]) => type === 'config').length, 1);
  assert.equal(env.commands().filter(([type, name]) => type === 'event' && name === 'page_view').length, 0);
});

test('only approved events and finite parameter values reach the queue', () => {
  const env = browser();
  const adapter = env.create();
  adapter.setConsent(true);
  const count = env.commands().length;
  for (const name of ['page_view', 'click', 'user_email', 'random_event', undefined, 'article_click', 'demo_click', 'report_click', 'contact_click', 'social_click', 'project_link_click']) {
    assert.equal(adapter.trackEvent(name, { email: 'person@example.com' }), false);
  }
  assert.equal(env.commands().length, count);
  for (const name of ['project_open', 'resume_click']) {
    assert.equal(adapter.trackEvent(name, {
      project_id: 'twoworlds', content_id: 'shannon', platform: 'github', placement: 'footer',
      email: 'person@example.com', href: 'https://private.example/secret',
      page_location: 'https://private.example/', send_to: 'G-OTHER',
    }), true);
    const event = env.commands().at(-1);
    assert.equal(event[1], name);
    assert.deepEqual(event[2], {
      project_id: 'twoworlds', placement: 'footer',
      send_to: measurementId,
      page_location: 'https://vikrant-bhati.github.io/profile/',
      page_referrer: 'https://search.example/search',
      page_title: 'Vikrant Bhati — Portfolio',
    });
  }
  adapter.trackEvent('project_open', {
    project_id: 'private-freeform-value', content_id: 'person@example.com', platform: 'https://private.example', placement: '<script>',
  });
  const sanitized = env.commands().at(-1)[2];
  assert.equal(sanitized.project_id, undefined);
  assert.equal(sanitized.content_id, undefined);
  assert.equal(sanitized.platform, undefined);
  assert.equal(sanitized.placement, undefined);
  for (const placement of ['projects', 'profile_links', 'footer']) {
    adapter.trackEvent('resume_click', { placement });
    assert.equal(env.commands().at(-1)[2].placement, placement);
  }
  for (const placement of ['nav', 'hero', 'project_modal', 'notes', 'about']) {
    adapter.trackEvent('resume_click', { placement });
    assert.equal(env.commands().at(-1)[2].placement, undefined);
  }
  let getterRan = false;
  adapter.trackEvent('project_open', { get project_id() { getterRan = true; return 'twoworlds'; } });
  assert.equal(getterRan, false);
});

test('state is isolated across documents and property IDs', () => {
  const first = browser();
  const second = browser();
  const adapter = first.create();
  adapter.setConsent(true);
  assert.equal(second.create().isCollecting(), false);
  assert.equal(second.scripts.length, 0);
  second.create().setConsent(true);
  assert.equal(second.scripts.length, 1);
  const otherProperty = first.create('G-OTHER123');
  assert.equal(otherProperty.isCollecting(), false);
  otherProperty.setConsent(true);
  adapter.setConsent(false);
  assert.equal(otherProperty.isCollecting(), true);
  assert.equal(first.targetWindow['ga-disable-G-OTHER123'], false);
  assert.equal(first.scripts.length, 1);
  assert.equal(first.commands().filter(([type]) => type === 'config').length, 2);
  assert.equal(first.commands().filter(([type, name]) => type === 'event' && name === 'page_view').length, 0);
});

test('an off-site location change prevents new manual events and a further grant', () => {
  const env = browser();
  const adapter = env.create();
  adapter.setConsent(true);
  env.targetWindow.location = new URL('https://vikrant-bhati.github.io/other-project/');
  assert.equal(adapter.isCollecting(), false);
  const count = env.commands().length;
  assert.equal(adapter.trackEvent('resume_click'), false);
  assert.equal(env.commands().length, count);
  assert.equal(adapter.setConsent(true), false);
  assert.equal(env.targetWindow[`ga-disable-${measurementId}`], true);
});

test('invalid/non-HTTP referrers become empty and page credentials are never included', () => {
  const env = browser('https://user:secret@vikrant-bhati.github.io/profile/');
  env.targetDocument.referrer = 'javascript:private';
  env.create().setConsent(true);
  const config = env.commands().find(([type]) => type === 'config')[2];
  assert.equal(config.page_location, 'https://vikrant-bhati.github.io/profile/');
  assert.equal(config.page_referrer, '');
  assert.doesNotMatch(JSON.stringify(env.commands()), /user:secret|javascript:private/);
});
