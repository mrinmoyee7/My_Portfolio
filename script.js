function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
/* =================================
   THEME CHANGER
================================= */

const themeToggle = document.getElementById("theme-toggle");
const mobileThemeToggle = document.getElementById("mobile-theme-toggle");

const themeIcon = document.getElementById("theme-icon");
const mobileThemeIcon = document.getElementById("mobile-theme-icon");

/* Check saved theme */
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");

  if (themeIcon) {
    themeIcon.textContent = "☀️";
  }

  if (mobileThemeIcon) {
    mobileThemeIcon.textContent = "☀️";
  }
}

/* Change theme */
function changeTheme() {
  document.body.classList.toggle("dark-theme");

  const isDarkMode = document.body.classList.contains("dark-theme");

  if (isDarkMode) {
    localStorage.setItem("portfolio-theme", "dark");

    if (themeIcon) {
      themeIcon.textContent = "☀️";
    }

    if (mobileThemeIcon) {
      mobileThemeIcon.textContent = "☀️";
    }
  } else {
    localStorage.setItem("portfolio-theme", "light");

    if (themeIcon) {
      themeIcon.textContent = "🌙";
    }

    if (mobileThemeIcon) {
      mobileThemeIcon.textContent = "🌙";
    }
  }
}

/* Desktop button */
if (themeToggle) {
  themeToggle.addEventListener("click", changeTheme);
}

/* Mobile button */
if (mobileThemeToggle) {
  mobileThemeToggle.addEventListener("click", changeTheme);
}