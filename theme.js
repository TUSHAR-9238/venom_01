/**
 * ==============================================================================
 * STEM Assessment Platform - Theme Manager (Dark & Light Mode Switch)
 * ==============================================================================
 */

(function () {
  const THEME_STORAGE_KEY = "STEM_ASSESSMENT_THEME";

  function getSavedTheme() {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {
      // LocalStorage access exception fallback
    }
    return "dark"; // Default to dark mode
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    const label = document.getElementById("themeModeLabel");
    const moonIcon = document.querySelector(".theme-icon-moon");
    const sunIcon = document.querySelector(".theme-icon-sun");
    const toggleBtn = document.getElementById("themeToggleBtn");

    if (label) {
      label.textContent = theme === "light" ? "Light" : "Dark";
    }
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
      toggleBtn.setAttribute("title", `Current: ${theme === "light" ? "Light" : "Dark"} mode. Click to switch.`);
    }
    if (moonIcon && sunIcon) {
      if (theme === "light") {
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
      } else {
        moonIcon.classList.remove("hidden");
        sunIcon.classList.add("hidden");
      }
    }
  }

  // Pre-load theme immediately
  const initialTheme = getSavedTheme();
  document.documentElement.setAttribute("data-theme", initialTheme);

  // Wire event handlers when DOM is ready
  function initThemeControls() {
    applyTheme(getSavedTheme());

    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn && !toggleBtn.dataset.bound) {
      toggleBtn.dataset.bound = "true";
      toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        const target = current === "light" ? "dark" : "light";
        try {
          localStorage.setItem(THEME_STORAGE_KEY, target);
        } catch (e) {
          // ignore
        }
        applyTheme(target);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeControls);
  } else {
    initThemeControls();
  }
})();
