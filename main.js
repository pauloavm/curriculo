(function () {
  const anoEl = document.getElementById("ano");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  const btnTema = document.getElementById("btnTema");
  const storageKey = "pm_theme";

  function setTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem(storageKey, theme);
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved) return saved;

    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  }

  setTheme(getPreferredTheme());

  if (btnTema) {
    btnTema.addEventListener("click", function () {
      const current = localStorage.getItem(storageKey) || "dark";
      setTheme(current === "light" ? "dark" : "light");
    });
  }
})();
