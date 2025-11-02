// Minimal interactions: set years, mobile menu toggle, active link highlight
document.addEventListener('DOMContentLoaded', function () {
  // Update copyright years
  var yrs = document.querySelectorAll('#year, #year2, #year3, #year4');
  yrs.forEach(el => el && (el.textContent = new Date().getFullYear()));

  // Support multiple toggles that share behavior
  var toggles = document.querySelectorAll('[id^="mobile-toggle"]');
  toggles.forEach(t => {
    t.addEventListener('click', function () {
      // find nearest header and toggle nav lists
      var header = t.closest('.site-header');
      if (!header) return;
      var lists = header.querySelectorAll('.nav-list');
      lists.forEach(l => {
        if (getComputedStyle(l).display === 'none') {
          l.style.display = 'flex';
        } else {
          l.style.display = 'none';
        }
      });
      // flip aria
      var expanded = t.getAttribute('aria-expanded') === 'true';
      t.setAttribute('aria-expanded', String(!expanded));
    });
  });

// Simple testimonial navigation placeholder
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

leftArrow.addEventListener('click', () => {
  alert('Previous testimonial');
});

rightArrow.addEventListener('click', () => {
  alert('Next testimonial');
});


document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer');
  footer.style.opacity = 0;
  window.addEventListener('scroll', () => {
    const pos = footer.getBoundingClientRect().top;
    const winHeight = window.innerHeight;
    if (pos < winHeight - 100) {
      footer.style.transition = 'opacity 1.2s ease-in-out';
      footer.style.opacity = 1;
    }
  });
});


  // Simple active-nav based on pathname
  var links = document.querySelectorAll('.nav-link');
  links.forEach(a => {
    try {
      var href = a.getAttribute('href');
      if (href && location.pathname.endsWith(href)) {
        links.forEach(x => x.classList.remove('active'));
        a.classList.add('active');
      }
    } catch (e) {}
  });
});
