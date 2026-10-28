import { applyLanguage, type Lang } from "../i18n/ui";

// El idioma y el tema iniciales ya se fijaron en BaseHead (antes del primer pintado).
const root = document.documentElement;
const currentLang = (): Lang => (root.lang === "es" ? "es" : "en");

applyLanguage(currentLang());

document.getElementById("langToggle")?.addEventListener("click", () => {
  const next: Lang = currentLang() === "es" ? "en" : "es";
  try {
    localStorage.setItem("lang", next);
  } catch {}
  applyLanguage(next);
});

document.getElementById("themeToggle")?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
});
