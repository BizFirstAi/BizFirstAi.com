/**
 * ei-layout.js — EdgeInteract product site
 * Injects shared nav, mobile drawer, and footer into all EdgeInteract pages.
 */

const EI_NAV = `
<style>
  .b-mobile-menu { display: flex; flex-direction: column; overflow: hidden; }
  .b-mobile-nav { overflow-y: auto; flex: 1; }
</style>
<nav class="b-navbar">
  <div class="b-navbar-container">

    <a href="https://bizfirstai.com" class="ei-brand" target="_blank" rel="noopener">
      <img src="https://bizfirstai.com/website/assets/Logo/logo-m.png" alt="BizFirstAi" style="height:42px;width:auto;display:block;" />
      <div class="ei-brand__text">
        <span class="ei-brand__name">EdgeInteract</span>
        <span class="ei-brand__by">by BizFirstAi</span>
      </div>
    </a>

    <ul class="b-navbar-menu">
      <li><a href="./index.html"        class="b-nav-link" data-page="home">Home</a></li>
      <li><a href="./get-started.html" class="b-nav-link" data-page="get-started">Get Started</a></li>
      <li><a href="./architecture.html" class="b-nav-link" data-page="architecture">Architecture</a></li>
      <li><a href="./examples.html"     class="b-nav-link" data-page="examples">Examples</a></li>
      <li><a href="./blueprint.html"   class="b-nav-link" data-page="blueprint">Blueprint</a></li>
      <li><a href="./screenshots.html" class="b-nav-link" data-page="screenshots">Screenshots</a></li>
    </ul>

    <div class="b-navbar-cta">
      <a href="https://bizfirstai.com/website/contact.html" class="b-btn b-btn-primary">Book a Demo</a>
    </div>

    <button class="b-hamburger" id="ei-hamburger" aria-label="Open menu" aria-expanded="false">
      <span class="b-hamburger__line"></span>
      <span class="b-hamburger__line"></span>
      <span class="b-hamburger__line"></span>
    </button>

  </div>
</nav>

<div class="b-mobile-backdrop" id="ei-mobile-backdrop"></div>


<div class="b-mobile-menu" id="ei-mobile-menu" aria-hidden="true">
  <div class="b-mobile-menu__header">
    <a href="https://bizfirstai.com" class="ei-brand" target="_blank" rel="noopener">
      <img src="https://bizfirstai.com/website/assets/Logo/logo-m.png" alt="BizFirstAi" style="height:38px;width:auto;display:block;" />
      <div class="ei-brand__text">
        <span class="ei-brand__name">EdgeInteract</span>
        <span class="ei-brand__by">by BizFirstAi</span>
      </div>
    </a>
    <button class="b-mobile-menu__close" id="ei-mobile-close" aria-label="Close menu">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
  </div>

  <nav class="b-mobile-nav">
    <a href="./index.html"        class="b-mobile-nav__link">Home</a>
    <a href="./get-started.html"  class="b-mobile-nav__link" data-page="get-started">Get Started</a>
    <a href="./architecture.html" class="b-mobile-nav__link" data-page="architecture">Architecture</a>
    <a href="./examples.html"     class="b-mobile-nav__link" data-page="examples">Examples</a>
    <a href="./blueprint.html"   class="b-mobile-nav__link" data-page="blueprint">Blueprint</a>
    <a href="./screenshots.html" class="b-mobile-nav__link" data-page="screenshots">Screenshots</a>
  </nav>

  <div class="b-mobile-menu__cta">
    <a href="./get-started.html" class="b-btn b-btn-primary">Get Started</a>
  </div>
</div>
`;

const EI_FOOTER = `
<div class="ei-footer">
  <div class="b-container">
    <div class="ei-footer__inner">

      <a href="https://bizfirstai.com" class="ei-brand" target="_blank" rel="noopener">
        <div class="ei-brand__mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div class="ei-brand__text">
          <span class="ei-brand__name">EdgeInteract</span>
          <span class="ei-brand__by">by BizFirstAi</span>
        </div>
      </a>

      <div class="ei-footer__links">
        <a href="./get-started.html"  class="ei-footer__link">Get Started</a>
        <a href="./architecture.html" class="ei-footer__link">Architecture</a>
        <a href="./examples.html"     class="ei-footer__link">Examples</a>
        <a href="./blueprint.html"   class="ei-footer__link">Blueprint</a>
        <a href="./screenshots.html" class="ei-footer__link">Screenshots</a>
        <a href="https://community.bizfirstai.com/tag/edge-interact" class="ei-footer__link" target="_blank" rel="noopener">Community</a>
        <a href="https://bizfirstai.com" class="ei-footer__link" target="_blank" rel="noopener">BizFirstAi.com</a>
      </div>

      <p class="ei-footer__copy">&copy; 2026 BizFirst LLC</p>

    </div>
  </div>
</div>
`;

function setEiActiveLink() {
  const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('.b-navbar-menu .b-nav-link[data-page]').forEach(link => {
    link.classList.toggle('b-active', link.dataset.page === page);
  });
  document.querySelectorAll('.b-mobile-nav .b-mobile-nav__link[data-page]').forEach(link => {
    link.classList.toggle('b-active', link.dataset.page === page);
  });
}

function initEiMobileNav() {
  const hamburger = document.getElementById('ei-hamburger');
  const menu      = document.getElementById('ei-mobile-menu');
  const backdrop  = document.getElementById('ei-mobile-backdrop');
  const closeBtn  = document.getElementById('ei-mobile-close');

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
  const header = document.getElementById('ei-header');
  if (header) header.innerHTML = EI_NAV;

  const footer = document.getElementById('ei-footer');
  if (footer) footer.innerHTML = EI_FOOTER;

  setEiActiveLink();
  initEiMobileNav();
});
