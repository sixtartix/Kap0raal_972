// Animation de chargement pour la section hero
window.addEventListener('load', function() {
  const heroSection = document.querySelector('.hero');
  heroSection.classList.add('fade-in');
  setTimeout(() => {
    heroSection.classList.add('visible');
  }, 100);
});

// Animation de défilement pour les autres sections
window.addEventListener('scroll', function() {
  const fadeIns = document.querySelectorAll('.fade-in');
  
  fadeIns.forEach(function(element) {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      element.classList.add('visible');
    }
  });
});

// Fonction pour gérer le défilement en douceur lors du clic sur le menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
