const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});
