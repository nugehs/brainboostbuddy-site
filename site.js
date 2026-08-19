(function () {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  const mobileMenuQuery = window.matchMedia('(max-width: 860px)');

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 8);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const setMenuState = (open) => {
    if (!menuButton || !menu) return;
    const isMobileMenu = mobileMenuQuery.matches;
    const isOpen = isMobileMenu && open;

    menuButton.setAttribute('aria-expanded', String(isOpen));
    menu.classList.toggle('open', isOpen);
    menu.setAttribute('aria-hidden', String(isMobileMenu && !isOpen));
    menu.inert = isMobileMenu && !isOpen;
  };

  const closeMenu = () => setMenuState(false);

  setMenuState(false);
  if (typeof mobileMenuQuery.addEventListener === 'function') {
    mobileMenuQuery.addEventListener('change', closeMenu);
  } else {
    mobileMenuQuery.addListener(closeMenu);
  }

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuState(!open);
  });

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const platform = navigator.userAgent.includes('Windows') ? 'windows' : navigator.userAgent.includes('Mac') ? 'mac' : '';
  if (platform) document.querySelector(`[data-platform="${platform}"]`)?.classList.add('recommended');
})();
