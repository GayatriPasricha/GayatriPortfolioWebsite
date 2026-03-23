// ===== SMOOTH SCROLL & ACTIVE LINK =====
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
  const scrollY = window.scrollY + 120;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', setActiveLink);

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function toggleMenu() {
  hamburger.classList.toggle('active');
  navLinksMenu.classList.toggle('open');
  navOverlay.classList.toggle('show');
  document.body.style.overflow = navLinksMenu.classList.contains('open') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

navLinksMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinksMenu.classList.contains('open')) {
      toggleMenu();
    }
  });
});

// ===== SCROLL ANIMATIONS (IntersectionObserver) =====
const fadeElements = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

fadeElements.forEach((el) => fadeObserver.observe(el));

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Google Sheets Web App URL (handles both data logging + email notification)
const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_SHEETS_EXEC_URL';

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Sending... <i class="ri-loader-4-line"></i>';

  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    formStatus.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
    formStatus.className = 'form-status success';
    contactForm.reset();
  } catch (err) {
    formStatus.textContent = '❌ Oops! Something went wrong. Please try again.';
    formStatus.className = 'form-status error';
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message <i class="ri-send-plane-fill"></i>';
  }
});
