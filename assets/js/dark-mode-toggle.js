document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
  
    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.toggle('dark-mode', currentTheme === 'dark');
    updateButtonText(toggleButton, currentTheme);
  
    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      updateButtonText(toggleButton, theme);
    });
  });
  
  function updateButtonText(button, theme) {
    button.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  }