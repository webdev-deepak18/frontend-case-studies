/**
 * navigation functionality
 *
 * @format
 */

const header = document.querySelector('.site-header')
let lastScrollY = window.scrollY
let isSticky = false
let ticking = false

function updateHeader() {
  const currentScroll = window.scrollY

  // Scrolling down
  if (currentScroll > lastScrollY) {
    header.style.transform = 'translateY(-100%)'
  } else {
    header.style.transform = 'translateY(0)'

    // Add sticky only if scrolled past 100px
    if (currentScroll > 100 && !isSticky) {
      header.classList.add('sticky')
      isSticky = true
    }

    // Delay removal of sticky to avoid flicker
    if (currentScroll <= 100 && isSticky) {
      setTimeout(() => {
        if (window.scrollY <= 100) {
          header.classList.remove('sticky')
          isSticky = false
        }
      }, 150) // 150ms delay allows for smoother transition
    }
  }

  lastScrollY = currentScroll
  ticking = false
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateHeader)
    ticking = true
  }
})

/* udpate year in the site footer */
document.getElementById('year').textContent = new Date().getFullYear()


