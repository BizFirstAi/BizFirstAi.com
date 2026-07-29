/**
 * Passport Layout Injector — Passport by BizFirstAi
 * Dynamically injects header and footer into all Passport pages.
 * Containers: #pp-header-container and #pp-footer-container
 */

const PP_SHARED_HEADER = `
<style>
  .b-mobile-menu { display: flex; flex-direction: column; overflow: hidden; }
  .b-mobile-nav { overflow-y: auto; flex: 1; }
</style>
<nav class="b-navbar">
  <div class="b-navbar-container">

    <a href="https://bizfirstai.com" class="b-navbar-logo pp-logo-link" target="_blank" rel="noopener">
      <span class="pp-logo-icon" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L4 7V16C4 22.627 9.373 28.627 16 30C22.627 28.627 28 22.627 28 16V7L16 2Z"
            fill="none" stroke="#16A34A" stroke-width="2" stroke-linejoin="round"/>
          <rect x="11" y="14" width="10" height="9" rx="1.5"
            fill="none" stroke="#16A34A" stroke-width="1.75"/>
          <path d="M13 14V11.5C13 10.12 14.343 9 16 9C17.657 9 19 10.12 19 11.5V14"
            stroke="#16A34A" stroke-width="1.75" stroke-linecap="round"/>
          <circle cx="16" cy="18.5" r="1.25" fill="#22C55E"/>
        </svg>
      </span>
      <span class="pp-logo-wordmark">
        <span class="pp-logo-name">Passport</span>
        <span class="pp-logo-byline">by BizFirstAi</span>
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
    <a href="https://bizfirstai.com" class="pp-logo-link" target="_blank" rel="noopener">
      <span class="pp-logo-icon" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L4 7V16C4 22.627 9.373 28.627 16 30C22.627 28.627 28 22.627 28 16V7L16 2Z"
            fill="none" stroke="#16A34A" stroke-width="2" stroke-linejoin="round"/>
          <rect x="11" y="14" width="10" height="9" rx="1.5"
            fill="none" stroke="#16A34A" stroke-width="1.75"/>
          <path d="M13 14V11.5C13 10.12 14.343 9 16 9C17.657 9 19 10.12 19 11.5V14"
            stroke="#16A34A" stroke-width="1.75" stroke-linecap="round"/>
          <circle cx="16" cy="18.5" r="1.25" fill="#22C55E"/>
        </svg>
      </span>
      <span class="pp-logo-wordmark">
        <span class="pp-logo-name">Passport</span>
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

const PP_SHARED_FOOTER = `
<div class="b-footer-container">

  <div class="b-footer-section">
    <div class="b-footer-brand">
      <div class="pp-footer-logo">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L4 7V16C4 22.627 9.373 28.627 16 30C22.627 28.627 28 22.627 28 16V7L16 2Z"
            fill="none" stroke="#16A34A" stroke-width="2" stroke-linejoin="round"/>
          <rect x="11" y="14" width="10" height="9" rx="1.5"
            fill="none" stroke="#16A34A" stroke-width="1.75"/>
          <path d="M13 14V11.5C13 10.12 14.343 9 16 9C17.657 9 19 10.12 19 11.5V14"
            stroke="#16A34A" stroke-width="1.75" stroke-linecap="round"/>
          <circle cx="16" cy="18.5" r="1.25" fill="#22C55E"/>
        </svg>
        <span class="pp-footer-wordmark">Passport</span>
      </div>
      <p class="b-footer-tagline">Enterprise IAM. Without the enterprise price tag.</p>
    </div>
  </div>

  <div class="b-footer-section">
    <h4>Product</h4>
    <ul>
      <li><a href="./features.html">Features</a></li>
      <li><a href="https://bizfirstai.com/website/docs.html">Docs</a></li>
      <li><a href="./blueprint.html">Blueprint</a></li>
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
      <li><a href="https://bizfirstai.com/website/privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a></li>
      <li><a href="https://bizfirstai.com/website/terms-of-service.html" target="_blank" rel="noopener">Terms of Service</a></li>
    </ul>
  </div>

</div>

<div class="b-footer-bottom">
  <p>&copy; 2026 BizFirst LLC &middot; Passport is a BizFirstAi product.</p>
</div>
`;

/**
 * Set active nav link based on current page filename.
 */
function ppSetActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.b-navbar-menu .b-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (
      href === `./${currentPage}` ||
      (currentPage === '' && href === './index.html')
    ) {
      link.classList.add('b-active');
    } else {
      link.classList.remove('b-active');
    }
  });
}

/**
 * Wire up mobile hamburger, backdrop, close button, Escape key, and link-click close.
 */
function ppInitMobileNav() {
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
  const headerContainer = document.getElementById('pp-header-container');
  if (headerContainer) {
    headerContainer.innerHTML = PP_SHARED_HEADER;
  }

  const footerContainer = document.getElementById('pp-footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = PP_SHARED_FOOTER;
  }

  ppSetActiveNavLink();
  ppInitMobileNav();
});
