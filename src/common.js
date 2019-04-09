export function ru() {
    return navigator.language === 'ru-RU';
}


export function formatDate(some) {
    const format = ru() ? `DD MMM YYYY в HH:mm` : `MM/DD/YYYY hh:mm a`;
    return moment(some).format(format).replace('.', '');
}


export function  copyToClipboard (str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
