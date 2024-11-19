// theme-toggle.js
function setThemeIcon(isDark) {
  const iconElement = document.getElementById('theme-toggle-icon');
  if (iconElement) {
    iconElement.textContent = isDark ? '🌞' : '🌙';
  }
}

function toggleTheme(event) {
  event.preventDefault(); // Prevent the link from navigating
  const body = document.body;
  const isDarkMode = body.classList.contains('dark-theme');
  
  if (isDarkMode) {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
  
  setThemeIcon(!isDarkMode);
}

// Check for saved theme preference or respect OS theme setting
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: light)');
const currentTheme = localStorage.getItem('theme');
const shouldUseDarkTheme = currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches);

if (shouldUseDarkTheme) {
  document.body.classList.add('dark-theme');
} else {
  document.body.classList.remove('dark-theme');
}

setThemeIcon(shouldUseDarkTheme);

// Add event listener to toggle link
document.addEventListener('DOMContentLoaded', (event) => {
  const toggleLink = document.getElementById('theme-toggle');
  if (toggleLink) {
    toggleLink.addEventListener('click', toggleTheme);
  }
});


function toggleAbstract(id) {
  var abstract = document.getElementById(id);
  abstract.classList.toggle('show');
}
