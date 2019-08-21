const THEME = 'theme';

export function setTheme(theme) {
    if (theme) {
        localStorage.setItem(THEME, theme);
    }
    document.body.setAttribute('class', getTheme());
}

export function getTheme() {
    return localStorage.getItem(THEME) || 'light'
}