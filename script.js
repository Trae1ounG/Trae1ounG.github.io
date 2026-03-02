// Theme Toggle Script
(function() {
  // Get saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const toggleBtn = document.getElementById('theme-toggle');

  toggleBtn.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Set new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Check system preference on load only if no saved theme
  if (!localStorage.getItem('theme')) {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
