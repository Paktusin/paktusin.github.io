import {ru} from "./common";

export function formatDate(some) {
    const format = ru() ? `DD MMM YYYY в HH:mm` : `MM/DD/YYYY hh:mm a`;
    return moment(some).format(format).replace('.', '');
}

export default formatDate;