import * as config from '../config';

export default class Bg {
    constructor(bgEl = null) {
        this.bgEl = [];
        if (bgEl) this.bgEl.push(bgEl);
        this.images = config.images;
        this.init()
    }

    init() {
        let bgEl = document.createElement('div');
        this.bgEl.push(bgEl);
        bgEl.setAttribute('id', 'bg');
        document.body.appendChild(bgEl);
    }

    change(index) {
        this.bgEl.forEach((el) => {
            el.style.backgroundImage = `url(${this.images[index]})`;
        });
    }
}