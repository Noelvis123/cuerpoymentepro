// Selector de idioma ES / EN
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'es';

function updateLanguage(lang) {
  currentLang = lang;
  langToggle.textContent = lang.toUpperCase();

  const elements = document.querySelectorAll('[data-es][data-en]');
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

langToggle.addEventListener('click', () => {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  updateLanguage(newLang);
});

// Animaciones al hacer scroll
const animated = document.querySelectorAll('.fade-up');

function onScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  animated.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', () => {
  onScroll();
  updateLanguage('es'); // idioma inicial
});
