let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    // add the darkmode class to the body
    document.body.classList.add('darkmode');
    // update darkMode in the LocalStorage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    // remove the darkmode class from the body
    document.body.classList.remove('darkmode');
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