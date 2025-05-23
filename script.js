// === THEME TOGGLE ===
const toggleButton = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

toggleButton.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', newTheme);
  toggleButton.textContent = newTheme === 'dark' ? '🌙 Toggle Theme - Could have bugs' : '☀️ Toggle Theme - Could have bugs';
});

// === ADVANCED SCROLL REVEAL ===
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
