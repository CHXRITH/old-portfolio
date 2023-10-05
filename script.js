const themeToggle = document.getElementById('theme-toggle');
const themeStyleLink = document.getElementById('theme-style');

themeToggle.addEventListener('click', () => {
    if (themeStyleLink.getAttribute('href') === 'style.css') {
        themeStyleLink.setAttribute('href', 'style-dark.css');
    } else {
        themeStyleLink.setAttribute('href', 'style.css');
    }
});
