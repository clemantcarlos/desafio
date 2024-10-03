export function headerScroll() {
  const $topNavBar = document.querySelector('#topNavbar');
  const $bottomNavBar = document.querySelector('#bottomNavbar');
  const $navLinks = document.querySelectorAll('.custom-nav-link');
  
  // ONLOAD
  if ( window.scrollY > 0) {
    $topNavBar.classList.remove('custom-bg-primary')
    $topNavBar.classList.add('bg-white');
    $topNavBar.classList.add('custom-text-primary-dark');

    $bottomNavBar.classList.add('custom-bg-primary')

    $navLinks.forEach(($link) => {
      $link.classList.remove('text-light');
      $link.classList.add('text-dark');
    });
  } else {
    $topNavBar.classList.add('custom-bg-primary');
    $topNavBar.classList.remove('bg-white');

    $bottomNavBar.classList.remove('custom-bg-primary')

    $navLinks.forEach(($link) => {
      $link.classList.add('text-light');
      $link.classList.remove('text-dark');
    });
  }
  
  // ONSCROLL
  window.addEventListener('scroll', (e) => {
    if ( window.scrollY > 0) {
      $topNavBar.classList.remove('custom-bg-primary')
      $topNavBar.classList.add('bg-white');
      $topNavBar.classList.add('custom-text-primary-dark');

      $bottomNavBar.classList.add('custom-bg-primary')

      $navLinks.forEach(($link) => {
        $link.classList.remove('text-light');
        $link.classList.add('text-dark');
      });
    } else {
      $topNavBar.classList.add('custom-bg-primary');
      $topNavBar.classList.remove('bg-white');

      $bottomNavBar.classList.remove('custom-bg-primary')

      $navLinks.forEach(($link) => {
        $link.classList.add('text-light');
        $link.classList.remove('text-dark');
      });
    }
  });
}