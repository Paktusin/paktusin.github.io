import {images} from "../base";
import $ from 'jquery'

export default class Bg {
    constructor() {

    }
    async change(index) {
        $('.bg').each((key, el) => {
            let newBg = $(el).clone();
            newBg.css({backgroundImage: `url(${images[index]})`});
            newBg.insertBefore($(el));
            $(el).animate({opacity: 0}, 300, 'swing', () => {
                $(el).remove();
            })
        });
    }
}