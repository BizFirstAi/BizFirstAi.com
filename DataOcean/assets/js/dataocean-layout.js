/**
 * DataOcean Layout Injector — DataOcean by BizFirstAi
 * Dynamically injects header and footer into all DataOcean pages.
 */

const DO_SHARED_HEADER = `
<style>
  .b-mobile-menu { display: flex; flex-direction: column; overflow: hidden; }
  .b-mobile-nav { overflow-y: auto; flex: 1; }
</style>
<nav class="b-navbar">
  <div class="b-navbar-container">

    <a href="https://bizfirstai.com" class="b-navbar-logo do-navbar-logo" target="_blank" rel="noopener">
      <img src="https://bizfirstai.com/website/assets/Logo/logo-m.png" alt="BizFirstAi" style="height:42px;width:auto;display:block;" />
      <span class="do-logo-text">
        <span class="do-logo-wordmark">DataOcean</span>
        <span class="do-logo-byline">by BizFirstAi</span>
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

<!-- Mobile backdrop -->
<div class="b-mobile-backdrop" id="b-mobile-backdrop"></div>

<!-- Mobile drawer -->


<div class="b-mobile-menu" id="b-mobile-menu" aria-hidden="true">
  <div class="b-mobile-menu__header">
    <a href="https://bizfirstai.com" class="do-navbar-logo" target="_blank" rel="noopener">
      <img src="https://bizfirstai.com/website/assets/Logo/logo-m.png" alt="BizFirstAi" style="height:38px;width:auto;display:block;" />
      <span class="do-logo-text">
        <span class="do-logo-wordmark">DataOcean</span>
        <span class="do-logo-byline">by BizFirstAi</span>
      </span>
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

const DO_SHARED_FOOTER = `
<div class="b-footer-container">

  <div class="b-footer-section">
    <div class="b-footer-brand">
      <div class="do-footer-logo">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="6" width="26" height="20" rx="3" stroke="#16A34A" stroke-width="1.8" fill="none"/>
          <rect x="7" y="2" width="18" height="4" rx="1.5" fill="#16A34A" opacity="0.5"/>
          <line x1="3" y1="13" x2="29" y2="13" stroke="#16A34A" stroke-width="1.4" opacity="0.6"/>
          <line x1="3" y1="19" x2="29" y2="19" stroke="#16A34A" stroke-width="1.4" opacity="0.4"/>
          <path d="M8 23 Q11 21 14 23 Q17 25 20 23 Q23 21 26 23" stroke="#22C55E" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        </svg>
        <span class="do-footer-logo-text">DataOcean</span>
      </div>
      <p class="b-footer-tagline">605+ tables. 48 domains. Zero schema debt.</p>
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
      <li><a href="https://bizfirstai.com/website/privacy.html">Privacy</a></li>
      <li><a href="https://bizfirstai.com/website/terms.html">Terms</a></li>
    </ul>
  </div>

</div>

<div class="b-footer-bottom">
  <p>&copy; 2026 BizFirst LLC &middot; DataOcean is a BizFirstAi product.</p>
</div>
`;

/**
 * Set active nav link based on current page filename
 */
function doSetActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.b-navbar-menu .b-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const linkPage = href ? href.split('/').pop() : '';
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
function doInitMobileNav() {
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

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close drawer when any link inside is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Inject on page load
document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('do-header-container');
  if (headerContainer) {
    headerContainer.innerHTML = DO_SHARED_HEADER;
  }

  const footerContainer = document.getElementById('do-footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = DO_SHARED_FOOTER;
  }

  doSetActiveNavLink();
  doInitMobileNav();
});
