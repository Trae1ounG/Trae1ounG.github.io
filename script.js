(() => {
  const button = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  const close = () => { links.classList.remove('show'); button.setAttribute('aria-expanded', 'false'); };
  button.addEventListener('click', () => {
    button.setAttribute('aria-expanded', String(links.classList.toggle('show')));
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && links.classList.contains('show')) { close(); button.focus(); } });
})();
