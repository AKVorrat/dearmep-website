// Adds scroll position lock for default docs sidebar

if (document.querySelector('#sidebar-default') !== null) {
  let sidebar = document.getElementById('sidebar-default');

  let pos = sessionStorage.getItem('sidebar-scroll');
  if (pos !== null) {
    sidebar.scrollTop = parseInt(pos, 10);
  }

  const terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';

  addEventListener(
    terminationEvent,
    _ => {
      sessionStorage.setItem('sidebar-scroll', sidebar.scrollTop);
    },
    { capture: true }
  );
}

if (document.querySelector('.navbar-transparent') !== null) {
  let navbar = document.querySelector('.navbar-transparent');

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.classList.remove('navbar-transparent');
    } else {
      navbar.classList.add('navbar-transparent');
    }
  });
}
