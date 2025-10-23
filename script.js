  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  
  let currentTab = document.querySelector('.tab-content.active');

    function openTab(tabId) {
      const newTab = document.getElementById(tabId);
      const buttons = document.querySelectorAll('.tab-link');
      buttons.forEach(btn => btn.classList.remove('active'));
      event.currentTarget.classList.add('active');

      // Exit animation for current tab
      if (currentTab && currentTab !== newTab) {
        currentTab.classList.add('fade-out');

        // After fade-out ends, switch tabs
        setTimeout(() => {
          currentTab.classList.remove('active', 'fade-out');
          newTab.classList.add('active');
          currentTab = newTab;
        }, 400); // match transition duration
      } else {
        // First click
        newTab.classList.add('active');
        currentTab = newTab;
      }
    }


  const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  testimonials.forEach((t, idx) => {
    t.classList.toggle('active', idx === i);
    dots[idx].classList.toggle('active', idx === i);
  });
}

function nextSlide() {
  index = (index + 1) % testimonials.length;
  showSlide(index);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});

setInterval(nextSlide, 4000);