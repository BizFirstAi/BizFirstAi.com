/**
 * MarketHub Layout Injector — by BizFirstAi
 * Dynamically injects header and footer into all MarketHub pages.
 */

const MH_HEADER = `
<style>
  .b-mobile-menu { display: flex; flex-direction: column; overflow: hidden; }
  .b-mobile-nav { overflow-y: auto; flex: 1; }
</style>
<nav class="b-navbar">
  <div class="b-navbar-container">

    <a href="https://bizfirstai.com" class="b-navbar-logo mh-navbar-logo" target="_blank" rel="noopener">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="rgba(22,163,74,0.15)" stroke="rgba(22,163,74,0.4)" stroke-width="1"/>
        <path d="M7 10h4v12H7V10zm7-3h4v15h-4V7zm7 5h4v10h-4V12z" fill="#16A34A"/>
        <path d="M7 22l18-12" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
      </svg>
      <span class="mh-logo-wordmark">
        <span class="mh-logo-name">MarketHub</span>
        <span class="mh-logo-byline">by BizFirstAi</span>
      </span>
    </a>

    <ul class="b-navbar-menu">
      <li><a href="./index.html" class="b-nav-link">Home</a></li>
      <li><a href="./features.html" class="b-nav-link">Features</a></li>
      <li><a href="https://bizfirstai.com/website/docs.html" class="b-nav-link">Docs</a></li>
      <li><a href="./blueprint.html" class="b-nav-link">Blueprint</a></li>
    </ul>

    <div class="b-navbar-cta">
      <a href="https://bizfirstai.com/website/contact.html" class="b-btn b-btn-primary">Book a Demo</a>
    </div>

    <button class="b-hamburger" id="b-hamburger" aria-label="Open menu" aria-expanded="false">
      <span class="b-hamburger__line"></span>
      <span class="b-hamburger__line"></span>
      <span class="b-hamburger__line"></span>
    </button>

  </div>
</nav>

<div class="b-mobile-backdrop" id="b-mobile-backdrop"></div>



<div class="b-mobile-menu" id="b-mobile-menu" aria-hidden="true">
  <div class="b-mobile-menu__header">
    <a href="https://bizfirstai.com" class="mh-navbar-logo" target="_blank" rel="noopener">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="rgba(22,163,74,0.15)" stroke="rgba(22,163,74,0.4)" stroke-width="1"/>
        <path d="M7 10h4v12H7V10zm7-3h4v15h-4V7zm7 5h4v10h-4V12z" fill="#16A34A"/>
      </svg>
      <span class="mh-logo-name" style="margin-left:8px;">MarketHub</span>
    </a>
    <button class="b-mobile-menu__close" id="b-mobile-close" aria-label="Close menu">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <nav class="b-mobile-nav">
    <a href="./index.html" class="b-mobile-nav__link">Home</a>
    <a href="./features.html" class="b-mobile-nav__link">Features</a>
    <a href="https://bizfirstai.com/website/docs.html" class="b-mobile-nav__link">Docs</a>
    <a href="./blueprint.html" class="b-mobile-nav__link">Blueprint</a>
  </nav>

  <div class="b-mobile-menu__cta">
    <a href="https://bizfirstai.com/website/contact.html" class="b-btn b-btn-primary">Book a Demo</a>
  </div>

</div>
`;

const MH_FOOTER = `
<div class="b-footer-container">

  <div class="b-footer-section">
    <div class="b-footer-brand">
      <a href="./index.html" class="mh-navbar-logo" style="display:inline-flex;align-items:center;gap:10px;margin-bottom:1rem;text-decoration:none;">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="32" height="32" rx="8" fill="rgba(22,163,74,0.15)" stroke="rgba(22,163,74,0.4)" stroke-width="1"/>
          <path d="M7 10h4v12H7V10zm7-3h4v15h-4V7zm7 5h4v10h-4V12z" fill="#16A34A"/>
        </svg>
        <span class="mh-logo-name">MarketHub</span>
      </a>
      <p class="b-footer-tagline">Your marketplace. Your brand. Your rules.</p>
    </div>
  </div>

  <div class="b-footer-section">
    <h4>Product</h4>
    <ul>
      <li><a href="./features.html">Features</a></li>
      <li><a href="https://bizfirstai.com/website/docs.html">Docs</a></li>
    </ul>
  </div>

  <div class="b-footer-section">
    <h4>Company</h4>
    <ul>
      <li><a href="https://bizfirstai.com/website/about.html">About</a></li>
      <li><a href="https://bizfirstai.com/website/contact.html">Contact</a></li>
      <li><a href="https://bizfirstai.com/website/index.html">BizFirstAi</a></li>
    </ul>
  </div>

  <div class="b-footer-section">
    <h4>Legal</h4>
    <ul>
      <li><a href="https://bizfirstai.com/website/privacy-policy.html" target="_blank" rel="noopener">Privacy</a></li>
      <li><a href="https://bizfirstai.com/website/terms-of-service.html" target="_blank" rel="noopener">Terms</a></li>
    </ul>
  </div>

</div>

<div class="b-footer-bottom">
  <p>&copy; 2026 BizFirst LLC &middot; MarketHub is a BizFirstAi product.</p>
</div>
`;

/**
 * Set active nav link based on current page filename
 */
function mhSetActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.b-navbar-menu .b-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const linkPage = href.split('/').pop();
    if (
      linkPage === currentPage ||
      (currentPage === '' && linkPage === 'index.html')
    ) {
      link.classList.add('b-active');
    } else {
      link.classList.remove('b-active');
    }
  });
}

/**
 * Wire up mobile hamburger, backdrop, and close behaviour
 */
function mhInitMobileNav() {
  const hamburger  = document.getElementById('b-hamburger');
  const mobileMenu = document.getElementById('b-mobile-menu');
  const backdrop   = document.getElementById('b-mobile-backdrop');
  const closeBtn   = document.getElementById('b-mobile-close');

  if (!hamburger || !mobileMenu || !backdrop) return;

  function openMenu() {
    hamburger.classList.add('b-hamburger--open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('b-mobile-menu--open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('b-mobile-backdrop--visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('b-hamburger--open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('b-mobile-menu--open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('b-mobile-backdrop--visible');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('b-mobile-menu--open');
    isOpen ? closeMenu() : openMenu();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Inject on page load
document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('mh-header-container');
  if (headerContainer) {
    headerContainer.innerHTML = MH_HEADER;
  }

  const footerContainer = document.getElementById('mh-footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = MH_FOOTER;
  }

  mhSetActiveNavLink();
  mhInitMobileNav();
});
