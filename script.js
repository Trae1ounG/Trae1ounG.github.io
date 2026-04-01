(function () {
  var saved = localStorage.getItem('theme');
  if (!saved) {
    saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  document.getElementById('theme-toggle').addEventListener('click', function () {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  var navbar = document.querySelector('.navbar');
  var sections = document.querySelectorAll('.section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');
  var backBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 20);
    backBtn.classList.toggle('visible', y > 400);

    var current = '';
    for (var i = 0; i < sections.length; i++) {
      if (y >= sections[i].offsetTop - 80) current = sections[i].id;
    }
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.toggle('active', navLinks[j].getAttribute('href') === '#' + current);
    }
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      var t = document.querySelector(href);
      if (t) window.scrollTo({ top: t.offsetTop - 60, behavior: 'smooth' });
    });
  });

  backBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
