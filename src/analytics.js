// Basic consent mode: no Google tag is loaded until the visitor grants consent.
// Enhanced Measurement owns automatic pageviews, outbound clicks, and downloads.
// The adapter adds only project detail opens and same-domain resume clicks.
const documentStates = new WeakMap();
const productionOrigin = 'https://vikrant-bhati.github.io';
const permittedPaths = new Set(['/profile', '/profile/']);
const deniedConsent = Object.freeze({
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
});
const eventNames = new Set(['project_open', 'resume_click']);
const parameterValues = {
  project_id: new Set(['twoworlds', 'optimization', 'qwen', 'cnn', 'learning', 'asphalt']),
  placement: new Set(['projects', 'profile_links', 'footer']),
};
const pageTitle = 'Vikrant Bhati — Portfolio';

function cleanUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return '';
    return url.origin + url.pathname;
  } catch {
    return '';
  }
}

function eligibleLocation(targetWindow) {
  try {
    const url = new URL(targetWindow.location.href);
    return url.origin === productionOrigin && permittedPaths.has(url.pathname);
  } catch {
    return false;
  }
}

function allowedParameters(params) {
  const clean = {};
  if (!params || typeof params !== 'object' || Array.isArray(params)) return clean;
  for (const [key, values] of Object.entries(parameterValues)) {
    // Only own data properties are accepted; arbitrary getters are not evaluated.
    const descriptor = Object.getOwnPropertyDescriptor(params, key);
    if (descriptor && values.has(descriptor.value)) clean[key] = descriptor.value;
  }
  return clean;
}

function inertAdapter() {
  return Object.freeze({
    isConfigured: false,
    isCollecting: () => false,
    setConsent: () => false,
    trackEvent: () => false,
  });
}

/**
 * Configure only on the production portfolio URL. Consent persistence belongs to
 * the calling UI. A true trackEvent result means queued, not delivery confirmed.
 * Shared document/property state makes repeated React mounts idempotent.
 */
export function createPortfolioAnalytics({ measurementId, window: targetWindow, document: targetDocument } = {}) {
  if (typeof measurementId !== 'string' || !/^G-[A-Z0-9]+$/.test(measurementId)
    || !targetWindow || !targetDocument || !eligibleLocation(targetWindow)
    || typeof targetDocument.createElement !== 'function'
    || typeof targetDocument.head?.appendChild !== 'function') {
    return inertAdapter();
  }

  let documentState = documentStates.get(targetDocument);
  if (!documentState) {
    documentState = { properties: new Map(), queue: null, scriptAdded: false };
    documentStates.set(targetDocument, documentState);
  }
  let property = documentState.properties.get(measurementId);
  if (!property) {
    property = { granted: false, configured: false };
    documentState.properties.set(measurementId, property);
    targetWindow[`ga-disable-${measurementId}`] = true;
  }
  const disableKey = `ga-disable-${measurementId}`;
  const cookiePrefix = `vb_${measurementId.slice(2)}`;

  function ensureQueue() {
    if (documentState.queue) return;
    if (!Array.isArray(targetWindow.dataLayer)) targetWindow.dataLayer = [];
    // gtag.js expects the standard arguments objects, rather than arbitrary data.
    documentState.queue = function gtag() {
      targetWindow.dataLayer.push(arguments);
    };
    if (typeof targetWindow.gtag !== 'function') targetWindow.gtag = documentState.queue;
    documentState.queue('consent', 'default', { ...deniedConsent });
    documentState.queue('set', 'ads_data_redaction', true);
    documentState.queue('set', 'url_passthrough', false);
    documentState.queue('js', new Date());
  }

  function sendConsentUpdate() {
    if (!documentState.queue) return;
    const analyticsGranted = [...documentState.properties.values()].some((item) => item.granted);
    documentState.queue('consent', 'update', {
      ...deniedConsent,
      analytics_storage: analyticsGranted ? 'granted' : 'denied',
    });
  }

  function pageParameters() {
    return {
      page_location: cleanUrl(targetWindow.location.href),
      page_referrer: cleanUrl(targetDocument.referrer),
      page_title: pageTitle,
    };
  }

  function clearPropertyCookies() {
    // A property-specific prefix avoids deleting analytics cookies for other
    // projects on the same GitHub Pages origin. The last name handles a legacy
    // unprefixed session cookie for this exact property, never the shared _ga.
    const names = new Set([`${cookiePrefix}_ga`, `${cookiePrefix}_ga_${measurementId.slice(2)}`, `_ga_${measurementId.slice(2)}`]);
    try {
      for (const part of targetDocument.cookie.split(';')) {
        const name = part.split('=', 1)[0].trim();
        if (name === `${cookiePrefix}_ga` || name.startsWith(`${cookiePrefix}_ga_`)) names.add(name);
      }
      for (const name of names) {
        for (const path of ['/profile', '/profile/', '/']) {
          for (const domain of ['', 'vikrant-bhati.github.io', '.vikrant-bhati.github.io']) {
            targetDocument.cookie = `${name}=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path};${domain ? ` Domain=${domain};` : ''} Secure; SameSite=Lax`;
          }
        }
      }
    } catch {
      // Collection remains disabled even if the browser blocks cookie access.
    }
  }

  function isCollecting() {
    return property.granted && property.configured && !targetWindow[disableKey] && eligibleLocation(targetWindow);
  }

  function setConsent(granted) {
    // Only the boolean true authorizes collection; strings/truthy values do not.
    if (granted !== true || !eligibleLocation(targetWindow)) {
      const wasGranted = property.granted;
      property.granted = false;
      targetWindow[disableKey] = true;
      if (wasGranted) sendConsentUpdate();
      clearPropertyCookies();
      return false;
    }
    if (isCollecting()) return true;
    property.granted = true;
    targetWindow[disableKey] = false;
    ensureQueue();
    sendConsentUpdate();
    if (!property.configured) {
      documentState.queue('config', measurementId, {
        send_page_view: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_prefix: cookiePrefix,
        cookie_domain: 'vikrant-bhati.github.io',
        cookie_path: '/profile',
        cookie_flags: 'SameSite=Lax;Secure',
        ...pageParameters(),
      });
      property.configured = true;
    }
    if (!documentState.scriptAdded) {
      const script = targetDocument.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      script.referrerPolicy = 'no-referrer';
      targetDocument.head.appendChild(script);
      documentState.scriptAdded = true;
    }
    return true;
  }

  function trackEvent(name, params = {}) {
    if (!eventNames.has(name) || !isCollecting()) return false;
    documentState.queue('event', name, {
      ...allowedParameters(params),
      send_to: measurementId,
      ...pageParameters(),
    });
    return true;
  }

  return Object.freeze({ isConfigured: true, isCollecting, setConsent, trackEvent });
}
