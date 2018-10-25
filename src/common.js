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

function createFloor() {
    const table = $('<table></table>');
    const n = Math.round($(window).innerWidth() / 63);
    for (let i = 0; i < n; i++) {
        const tr = $('<tr></tr>');
        for (let j = 0; j < n * 2; j++) {
            tr.append('<td></td>')
        }
        table.append(tr);
    }
    $('#floor').html($('<div></div>').append(table));
}

window.addEventListener('resize', createFloor);

$(() => {
    setInterval(updateGlitch, 50);
    setInterval(updateTime, 1000);
    createFloor();
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