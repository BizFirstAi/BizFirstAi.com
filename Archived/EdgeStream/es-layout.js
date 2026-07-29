/**
 * es-layout.js — EdgeStream product site
 * Injects shared nav, mobile drawer, and footer into all EdgeStream pages.
 */

const ES_NAV = `
<style>
  .b-mobile-menu { display: flex; flex-direction: column; overflow: hidden; }
  .b-mobile-nav { overflow-y: auto; flex: 1; }
</style>
<nav class="b-navbar">
  <div class="b-navbar-container">

    <a href="https://www.bizfirstai.com" class="es-brand" target="_blank" rel="noopener">
      <img src="https://bizfirstai.com/website/assets/Logo/logo-m.png" alt="BizFirstAi" style="height:42px;width:auto;display:block;" />
      <div class="es-brand__text">
        <span class="es-brand__name">EdgeStream</span>
        <span class="es-brand__by">by BizFirstAi</span>
      </div>
    </a>

    <ul class="b-navbar-menu">
      <li><a href="./index.html"        class="b-nav-link" data-page="home">Home</a></li>
      <li><a href="./get-started.html"  class="b-nav-link" data-page="get-started">Get Started</a></li>
      <li><a href="./architecture.html" class="b-nav-link" data-page="architecture">Architecture</a></li>
      <li><a href="./use-cases.html"    class="b-nav-link" data-page="use-cases">Use Cases</a></li>
      <li><a href="./examples.html"     class="b-nav-link" data-page="examples">Examples</a></li>
      <li><a href="./blueprint.html"   class="b-nav-link" data-page="blueprint">Blueprint</a></li>
      <li><a href="./screenshots.html" class="b-nav-link" data-page="screenshots">Screenshots</a></li>
    </ul>

    <div class="b-navbar-cta">
      <a href="https://bizfirstai.com/website/contact.html" class="b-btn b-btn-primary">Book a Demo</a>
    </div>

    <button class="b-hamburger" id="es-hamburger" aria-label="Open menu" aria-expanded="false">
      <span class="b-hamburger__line"></span>
      <span class="b-hamburger__line"></span>
      <span class="b-hamburger__line"></span>
    </button>

  </div>
</nav>

<div class="b-mobile-backdrop" id="es-mobile-backdrop"></div>


<div class="b-mobile-menu" id="es-mobile-menu" aria-hidden="true">
  <div class="b-mobile-menu__header">
    <a href="https://www.bizfirstai.com" class="es-brand" target="_blank" rel="noopener">
      <img src="https://bizfirstai.com/website/assets/Logo/logo-m.png" alt="BizFirstAi" style="height:38px;width:auto;display:block;" />
      <div class="es-brand__text">
        <span class="es-brand__name">EdgeStream</span>
        <span class="es-brand__by">by BizFirstAi</span>
      </div>
    </a>
    <button class="b-mobile-menu__close" id="es-mobile-close" aria-label="Close menu">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
  </div>

  <nav class="b-mobile-nav">
    <a href="./index.html"        class="b-mobile-nav__link" data-page="home">Home</a>
    <a href="./get-started.html"  class="b-mobile-nav__link" data-page="get-started">Get Started</a>
    <a href="./architecture.html" class="b-mobile-nav__link" data-page="architecture">Architecture</a>
    <a href="./use-cases.html"    class="b-mobile-nav__link" data-page="use-cases">Use Cases</a>
    <a href="./examples.html"     class="b-mobile-nav__link" data-page="examples">Examples</a>
    <a href="./blueprint.html"   class="b-mobile-nav__link" data-page="blueprint">Blueprint</a>
    <a href="./screenshots.html" class="b-mobile-nav__link" data-page="screenshots">Screenshots</a>
  </nav>

  <div class="b-mobile-menu__cta">
    <a href="./get-started.html" class="b-btn b-btn-primary">Get Started</a>
  </div>
</div>
`;

const ES_FOOTER = `
<div class="es-footer">
  <div class="b-container">
    <div class="es-footer__inner">

      <a href="https://www.bizfirstai.com" class="es-brand" target="_blank" rel="noopener">
        <div class="es-brand__mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </div>
        <div class="es-brand__text">
          <span class="es-brand__name">EdgeStream</span>
          <span class="es-brand__by">by BizFirstAi</span>
        </div>
      </a>

      <div class="es-footer__links">
        <a href="./index.html"        class="es-footer__link">Home</a>
        <a href="./get-started.html"  class="es-footer__link">Get Started</a>
        <a href="./architecture.html" class="es-footer__link">Architecture</a>
        <a href="./use-cases.html"    class="es-footer__link">Use Cases</a>
        <a href="./examples.html"     class="es-footer__link">Examples</a>
        <a href="./blueprint.html"   class="es-footer__link">Blueprint</a>
        <a href="./screenshots.html" class="es-footer__link">Screenshots</a>
        <a href="https://community.bizfirstai.com/tag/edge-stream" class="es-footer__link" target="_blank" rel="noopener">Community</a>
        <a href="https://www.bizfirstai.com" class="es-footer__link" target="_blank" rel="noopener">BizFirstAi.com</a>
      </div>

      <p class="es-footer__copy">&copy; 2026 BizFirst LLC</p>

    </div>
  </div>
</div>
`;

function setEsActiveLink() {
  const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const pageKey = page === 'index' ? 'home' : page;
  document.querySelectorAll('.b-navbar-menu .b-nav-link[data-page]').forEach(link => {
    link.classList.toggle('b-active', link.dataset.page === pageKey);
  });
  document.querySelectorAll('.b-mobile-nav .b-mobile-nav__link[data-page]').forEach(link => {
    link.classList.toggle('b-active', link.dataset.page === pageKey);
  });
}

function initEsMobileNav() {
  const hamburger = document.getElementById('es-hamburger');
  const menu      = document.getElementById('es-mobile-menu');
  const backdrop  = document.getElementById('es-mobile-backdrop');
  const closeBtn  = document.getElementById('es-mobile-close');

  if (!hamburger || !menu || !backdrop) return;

  const open = () => {
    hamburger.classList.add('b-hamburger--open');
    hamburger.setAttribute('aria-expanded', 'true');
    menu.classList.add('b-mobile-menu--open');
    menu.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('b-mobile-backdrop--visible');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    hamburger.classList.remove('b-hamburger--open');
    hamburger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('b-mobile-menu--open');
    menu.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('b-mobile-backdrop--visible');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () =>
    menu.classList.contains('b-mobile-menu--open') ? close() : open()
  );
  if (closeBtn) closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('es-header');
  if (header) header.innerHTML = ES_NAV;

  const footer = document.getElementById('es-footer');
  if (footer) footer.innerHTML = ES_FOOTER;

  setEsActiveLink();
  initEsMobileNav();
});
