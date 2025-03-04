import './styles/style.css'

const themeToggleButton = document.querySelector('[data-theme-toggle]');

themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  themeToggleButton.textContent = newTheme === 'dark' ? 'Light mode' : 'Dark mode';
});
