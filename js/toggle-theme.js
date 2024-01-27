let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const themeIcon = document.querySelector('#theme-icon');

const enableDarkMode = () => {
    // add the darkmode class to the body
    document.body.classList.add('darkmode');
    // update icon 
    themeIcon.setAttribute("name", "moon");
    // update darkMode in the LocalStorage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    // remove the darkmode class from the body
    document.body.classList.remove('darkmode');
    // update icon
    themeIcon.setAttribute("name", "sunny");
    // update darkMode in the LocalStorage
    localStorage.setItem('darkMode', null);
};

if (darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    // updating variable every time we click
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});