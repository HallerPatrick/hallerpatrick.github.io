// Function to set the theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateIcon(theme);
}

// Function to toggle the theme
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Function to update the icon based on the current theme
function updateIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (!icon) {
        return;
    }

    if (theme === 'dark') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Set the initial theme when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    setDesignMode();
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
});

// Add event listener to the theme toggle button
// document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

function setDesignMode() {
    const params = new URLSearchParams(window.location.search);
    const requestedDesign = params.get('design');
    const knownDesigns = ['classic', 'console'];

    if (requestedDesign && knownDesigns.includes(requestedDesign)) {
        localStorage.setItem('design', requestedDesign);
    }

    const savedDesign = localStorage.getItem('design') || 'classic';
    document.documentElement.setAttribute('data-design', savedDesign);
}
