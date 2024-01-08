document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getCookie('theme');

    if (savedTheme) {
      toggleTheme(savedTheme);
    }
});

const toggleTheme = (theme) => {
    document.body.classList.remove('dark', 'light', 'warm');
    document.body.classList.add(theme);

    document.cookie = `theme=${theme}; expires=Thu, 18 Dec 9999 12:00:00 UTC; path=/`;
    closeSettings()
};

const showSettings = () => {
    var setting = document.getElementById('setting-menu')
    setting.classList.toggle('display');
    document.getElementById('setting').classList.toggle('setting-rotate')
}
const closeSettings = () => {
    var setting = document.getElementById('setting-menu')
    setting.classList.remove('display');
    document.getElementById('setting').classList.remove('setting-rotate')

}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}