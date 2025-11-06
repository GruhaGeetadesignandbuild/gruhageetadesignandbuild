// Minimal interactions: set years, mobile menu toggle, active link highlight
document.addEventListener('DOMContentLoaded', function () {
  // Update copyright years
  var yrs = document.querySelectorAll('#year, #year2, #year3, #year4');
  yrs.forEach(el => el && (el.textContent = new Date().getFullYear()));


   
    

// Optional simple animation or interaction
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#fff8f0';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});


    // Simple fade-in animation on scroll
    const elements = document.querySelectorAll('.text-section, .image-section');
    window.addEventListener('scroll', () =>
     {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.style.transition = 'all 0.8s ease';
        }
      });
    });
  
// Simple script to add hover animation or alert
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    alert("You clicked on an image!");
  });
});

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

// Initialize EmailJS (replace with your user ID)
emailjs.init("T7qwvQi7pUlbg2mmh");

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  statusMsg.style.display = "block";
  statusMsg.className = "status-msg";
  statusMsg.textContent = "Sending message...";

  const serviceID = "service_l8enl6n";
  const templateID = "template_k8qraog";

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      statusMsg.textContent = "Message sent successfully!";
      statusMsg.classList.add("status-success");
      form.reset();
    }, (err) => {
      console.error(err);
      statusMsg.textContent = "Error sending message. Try again!";
      statusMsg.classList.add("status-error");
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

