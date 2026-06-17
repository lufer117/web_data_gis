document.addEventListener("DOMContentLoaded", function() {
  
  // --- NUEVO: Animación inicial tipo Spectral ---
  setTimeout(function() {
    document.body.classList.remove('is-preload');
  }, 100);
  // ----------------------------------------------

  // 1. Scroll reveal (animación de entrada)
  // ... el resto de tu código que ya tienes ...
  // 1. Scroll reveal (animación de entrada)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { 
        e.target.classList.add('visible'); 
        io.unobserve(e.target); 
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // 2. Mobile menu
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('menu-open');
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navbar.classList.remove('menu-open'));
  });

  // 3. Idioma
  const langSelect = document.getElementById('langSelector');
  const langFlag = document.querySelector('.lang-flag');

  langSelect.addEventListener('change', function() {
    if (this.value === 'en') {
      langFlag.textContent = '🇬🇧';
    } else {
      langFlag.textContent = '🇪🇸';
    }
  });

});