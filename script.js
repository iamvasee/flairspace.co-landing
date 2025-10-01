// Terminal Loader Animation
function initLoader() {
    const loader = document.getElementById('terminal-loader');
    const terminal = document.querySelector('.terminal');
    
    // Show terminal after loader completes
    setTimeout(() => {
        loader.classList.add('loader-hidden');
        terminal.classList.add('visible');
        
        // Remove loader from DOM after animation completes
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 3000); // Total animation duration
}

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loader
    initLoader();
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDarkScheme.matches) {
        // If no saved preference but user's OS is in dark mode
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Listen for changes in the OS theme preference
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) { // Only if user hasn't set a preference
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
});
