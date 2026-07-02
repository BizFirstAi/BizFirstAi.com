/**
 * flow-layout.js — Flow product site
 * Injects shared nav, mobile drawer, and footer into all Flow pages.
 */

const FLOW_NAV = `
<style>
  .b-mobile-menu { display: flex; flex-direction: column; overflow: hidden; }
  .b-mobile-nav { overflow-y: auto; flex: 1; }
</style>
<nav class="b-navbar">
  <div class="b-navbar-container">

    <a href="https://bizfirstai.com" class="flow-brand" target="_blank" rel="noopener">
      <div class="flow-brand__mark">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>
        </svg>
      </div>
      <div class="flow-brand__text">
        <span class="flow-brand__name">Flow</span>
        <span class="flow-brand__by">by BizFirstAi</span>
      </div>
    </a>

    <ul class="b-navbar-menu">
      <li><a href="./index.html"        class="b-nav-link" data-page="home">Home</a></li>
      <li><a href="./get-started.html" class="b-nav-link" data-page="get-started">Get Started</a></li>
      <li><a href="./architecture.html" class="b-nav-link" data-page="architecture">Architecture</a></li>
      <li><a href="./examples.html"     class="b-nav-link" data-page="examples">Examples</a></li>
      <li><a href="./blueprint.html"   class="b-nav-link" data-page="blueprint">Blueprint</a></li>
    </ul>

    <div class="b-navbar-cta">
      <a href="https://bizfirstai.com/website/contact.html" class="b-btn b-btn-primary">Book a Demo</a>
    </div>

    <button class="b-hamburger" id="flow-hamburger" aria-label="Open menu" aria-expanded="false">
      <span class="b-hamburger__line"></span>
      <span class="b-hamburger__line"></span>
      <span class="b-hamburger__line"></span>
    </button>

  </div>
</nav>

<div class="b-mobile-backdrop" id="flow-mobile-backdrop"></div>


<div class="b-mobile-menu" id="flow-mobile-menu" aria-hidden="true">
  <div class="b-mobile-menu__header">
    <a href="https://bizfirstai.com" class="flow-brand" target="_blank" rel="noopener">
      <div class="flow-brand__mark">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>
        </svg>
      </div>
      <div class="flow-brand__text">
        <span class="flow-brand__name">Flow</span>
        <span class="flow-brand__by">by BizFirstAi</span>
      </div>
    </a>
    <button class="b-mobile-menu__close" id="flow-mobile-close" aria-label="Close menu">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
  </div>

  <nav class="b-mobile-nav">
    <a href="./index.html"        class="b-mobile-nav__link">Home</a>
    <a href="./get-started.html"  class="b-mobile-nav__link" data-page="get-started">Get Started</a>
    <a href="./architecture.html" class="b-mobile-nav__link" data-page="architecture">Architecture</a>
    <a href="./examples.html"     class="b-mobile-nav__link" data-page="examples">Examples</a>
    <a href="./blueprint.html"   class="b-mobile-nav__link" data-page="blueprint">Blueprint</a>
  </nav>

  <div class="b-mobile-menu__cta">
    <a href="./get-started.html" class="b-btn b-btn-primary">Get Started</a>
  </div>
</div>
`;

const FLOW_FOOTER = `
<div class="flow-footer">
  <div class="b-container">
    <div class="flow-footer__inner">

      <a href="https://bizfirstai.com" class="flow-brand" target="_blank" rel="noopener">
        <div class="flow-brand__mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <div class="flow-brand__text">
          <span class="flow-brand__name">Flow</span>
          <span class="flow-brand__by">by BizFirstAi</span>
        </div>
      </a>

      <div class="flow-footer__links">
        <a href="./get-started.html"  class="flow-footer__link">Get Started</a>
        <a href="./architecture.html" class="flow-footer__link">Architecture</a>
        <a href="./examples.html"     class="flow-footer__link">Examples</a>
        <a href="./blueprint.html"   class="flow-footer__link">Blueprint</a>
        <a href="https://community.bizfirstai.com/tag/flow" class="flow-footer__link" target="_blank" rel="noopener">Community</a>
        <a href="https://bizfirstai.com" class="flow-footer__link" target="_blank" rel="noopener">BizFirstAi.com</a>
      </div>

      <p class="flow-footer__copy">&copy; 2026 BizFirst LLC</p>

    </div>
  </div>
</div>
`;

function setFlowActiveLink() {
  const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('.b-navbar-menu .b-nav-link[data-page]').forEach(link => {
    link.classList.toggle('b-active', link.dataset.page === page);
  });
  document.querySelectorAll('.b-mobile-nav .b-mobile-nav__link[data-page]').forEach(link => {
    link.classList.toggle('b-active', link.dataset.page === page);
  });
}

function initFlowMobileNav() {
  const hamburger = document.getElementById('flow-hamburger');
  const menu      = document.getElementById('flow-mobile-menu');
  const backdrop  = document.getElementById('flow-mobile-backdrop');
  const closeBtn  = document.getElementById('flow-mobile-close');

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
  const header = document.getElementById('flow-header');
  if (header) header.innerHTML = FLOW_NAV;

  const footer = document.getElementById('flow-footer');
  if (footer) footer.innerHTML = FLOW_FOOTER;

  setFlowActiveLink();
  initFlowMobileNav();
});
