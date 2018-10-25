import moment from 'moment';

function neonOn() {
    $('.neon').addClass('on');
}

function brokeNeon() {
    $('.neon').toggleClass('broke');
}

function updateTime() {
    $('#time').text(moment().format('YYYY-MM-DD HH:mm:ss'));
}

function updateGlitch() {
    const i = Math.floor(Math.random() * 18);
    $('.glitch').css("background-position", '0% -' + (Math.round(i) * 1080) + 'px');
}

$(() => {
    setInterval(updateGlitch, 50);
    setInterval(updateTime, 1000);
    const table = $('<table></table>');
    const n = 30;
    for (let i = 0; i < n; i++) {
        const tr = $('<tr></tr>');
        for (let j = 0; j < n * 2; j++) {
            tr.append('<td></td>')
        }
        table.append(tr);
    }
    $('#floor').append($('<div></div>').append(table));
    setTimeout(() => {
        neonOn();
        setInterval(() => {
            brokeNeon();
            setTimeout(() => {
                brokeNeon();
            }, 2000);
        }, 10000);
    }, 1000);
});