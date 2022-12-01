import moment from 'moment';

export function formatDate(some) {
    moment.locale(navigator.language);
    return moment(some).format(`DD MMM YYYY в HH:mm`);
}


export function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
