const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

function updateTimeAndDate() {
    const timeDateDisplay = document.getElementById('timeDateDisplay');
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    timeDateDisplay.textContent = `Date: ${formattedDate} | Time: ${formattedTime}`;
}

// Update every second
setInterval(updateTimeAndDate, 1000);

// Initial call to display time on page load
updateTimeAndDate();
