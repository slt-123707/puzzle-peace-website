/* Puzzle Peace ADHD Coaching — main.js */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile navigation toggle --- */
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside the header
    document.addEventListener('click', (e) => {
      if (!e.target.closest('header')) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- Mobile: swap "Book a call" buttons to tel: link --- */
  if (window.innerWidth <= 768) {
    document.querySelectorAll('a.btn').forEach(btn => {
      if (btn.textContent.trim() === 'Book a call') {
        btn.href = 'tel:+447588595511';
      }
    });
  }

  /* --- Highlight active nav link based on current page --- */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

});
