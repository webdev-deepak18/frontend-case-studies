
 /* navigation functionality */
 const header = document.querySelector('.site-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scroll down and beyond threshold
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scroll up
      header.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
  });
  
  /* udpate year in the site footer */
  document.getElementById('year').textContent = new Date().getFullYear()