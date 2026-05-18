// 🔹 Botón de idioma ES / EN con efecto deslizable
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

// Evento para cambiar idioma con animación deslizable
langToggle.addEventListener('click', () => {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  updateLanguage(newLang);

  // Animación de deslizamiento
  langToggle.style.transition = "transform 0.3s ease, background 0.3s ease";
  langToggle.style.transform = "translateX(12px)";
  langToggle.style.background = newLang === 'en' ? "#25D366" : "#111";
  langToggle.style.color = "#fff";

  setTimeout(() => {
    langToggle.style.transform = "translateX(0)";
  }, 300);
});

// 🔹 Animaciones al hacer scroll
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
