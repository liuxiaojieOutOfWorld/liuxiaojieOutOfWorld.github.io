(function () {
  var KEY = 'site-lang';

  function currentLang() {
    try {
      return localStorage.getItem(KEY) === 'zh' ? 'zh' : 'en';
    } catch (e) {
      return 'en';
    }
  }

  function applyLang(lang) {
    lang = lang === 'en' ? 'en' : 'zh';
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-switch [data-lang]');
    if (!btn) return;
    e.preventDefault();
    applyLang(btn.getAttribute('data-lang'));
  });

  applyLang(currentLang());
})();
