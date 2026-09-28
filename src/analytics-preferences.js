const storageKey = 'vikrant-portfolio-analytics-v1';
const choiceLifetime = 180 * 24 * 60 * 60 * 1000;

export function initializeAnalyticsPreferences(container, analytics) {
  const controller = new AbortController();
  const { signal } = controller;
  const panel = container.querySelector('#analytics-preferences');
  const settings = container.querySelector('#analytics-settings');
  const status = container.querySelector('#analytics-status');
  const allow = container.querySelector('#analytics-allow');
  const decline = container.querySelector('#analytics-decline');
  let choice = null;
  let openedFromSettings = false;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && typeof saved.granted === 'boolean' && saved.expires > Date.now()) choice = saved.granted;
  } catch {
    // The choice still works for this visit when browser storage is unavailable.
  }
  analytics.setConsent(choice === true);

  function showPreferences(visible) {
    panel.hidden = !visible;
    settings.setAttribute('aria-expanded', String(visible));
    status.textContent = choice === null ? '' : `Your current choice: analytics ${choice ? 'allowed' : 'off'}.`;
    decline.textContent = choice === true ? 'Turn analytics off' : 'No thanks';
  }
  showPreferences(choice === null);
  settings.addEventListener('click', () => {
    openedFromSettings = true;
    showPreferences(true);
    container.querySelector('#analytics-title').focus({ preventScroll: true });
  }, { signal });
  function saveChoice(granted) {
    choice = granted;
    analytics.setConsent(granted);
    try {
      localStorage.setItem(storageKey, JSON.stringify({ granted, expires: Date.now() + choiceLifetime }));
    } catch {
      // The adapter retains the in-memory choice for this visit.
    }
    showPreferences(false);
    const focusTarget = openedFromSettings ? settings : container.querySelector('#theme-toggle');
    focusTarget.focus({ preventScroll: true });
    openedFromSettings = false;
  }
  allow.addEventListener('click', () => saveChoice(true), { signal });
  decline.addEventListener('click', () => saveChoice(false), { signal });

  // Résumé is hosted on the same domain, so it is not an automatic outbound click.
  container.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href]');
    if (!anchor) return;
    const url = new URL(anchor.href);
    if (url.origin === 'https://vikrant-bhati.github.io' && url.pathname === '/Resume/') {
      analytics.trackEvent('resume_click', {
        placement: anchor.closest('#profile-links') ? 'profile_links' : 'footer',
      });
    }
  }, { signal });

  return () => controller.abort();
}
