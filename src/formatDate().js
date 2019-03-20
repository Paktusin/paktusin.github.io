import moment from 'moment';

moment.locale('ru');


export function formatDate(some) {
    return moment(some).format('DD MMM YYYY в HH:mm').replace('.', '');
}

export default formatDate;