import {images} from "../base";
import $ from 'jquery'

export default class Bg {
    constructor() {

    }

    async change(index) {
        const tmpImage = $(`<img src="${images[index]}" style="display:none">`);
        $(document.body).append(tmpImage);
        tmpImage.on('load', e => {
            tmpImage.remove();
            $('.bg').each((key, el) => {
                let newBg = $(el).clone();
                newBg.css({backgroundImage: `url(${$(e.target).attr('src')})`, opacity: 0});
                newBg.insertAfter($(el));
                newBg.fadeTo(200,1,'swing',()=>{
                    $(el).remove();
                });
            });
        });

    }
}