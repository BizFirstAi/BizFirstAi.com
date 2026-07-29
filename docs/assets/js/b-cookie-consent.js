/**
 * b-cookie-consent.js — BizFirstAi
 * Shows a cookie consent banner after 10 seconds.
 * Preference is stored in localStorage — banner never re-appears once decided.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'bizfirstai_cookie_consent';
  var DELAY_MS    = 10000;

  function hasDecided() {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return false;
    }
  }

  function saveDecision(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      // localStorage unavailable — degrade gracefully
    }
  }

  function dismiss(banner) {
    banner.classList.remove('b-cookie-banner--visible');
    banner.addEventListener('transitionend', function handler() {
      banner.removeEventListener('transitionend', handler);
      if (banner.parentNode) {
        banner.parentNode.removeChild(banner);
      }
    });
  }

  function buildBanner() {
    var banner = document.createElement('div');
    banner.className = 'b-cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie consent');

    banner.innerHTML =
      '<div class="b-cookie-banner__inner">'
      + '<div class="b-cookie-banner__icon">'
      +   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
      +     '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>'
      +     '<path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/>'
      +   '</svg>'
      + '</div>'
      + '<div class="b-cookie-banner__text">'
      +   '<div class="b-cookie-banner__title">We use cookies</div>'
      +   '<div class="b-cookie-banner__desc">We use essential and analytics cookies to improve your experience. '
      +     'Read our <a href="./cookie-policy.html">Cookie Policy</a> to learn more.</div>'
      + '</div>'
      + '<div class="b-cookie-banner__actions">'
      +   '<button class="b-btn b-btn-secondary" id="b-cookie-necessary">Necessary Only</button>'
      +   '<button class="b-btn b-btn-primary"   id="b-cookie-accept">Accept All</button>'
      + '</div>'
      + '</div>';

    return banner;
  }

  function init() {
    if (hasDecided()) return;

    var banner = buildBanner();
    document.body.appendChild(banner);

    // Trigger slide-in after 10 seconds
    setTimeout(function () {
      // Re-check in case user decided via another tab
      if (hasDecided()) {
        if (banner.parentNode) banner.parentNode.removeChild(banner);
        return;
      }
      banner.classList.add('b-cookie-banner--visible');
    }, DELAY_MS);

    banner.querySelector('#b-cookie-accept').addEventListener('click', function () {
      saveDecision('accepted');
      dismiss(banner);
    });

    banner.querySelector('#b-cookie-necessary').addEventListener('click', function () {
      saveDecision('necessary');
      dismiss(banner);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
