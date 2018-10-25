function neonOn() {
    $('.neon').addClass('on');
}

function brokeNeon() {
    $('.neon').toggleClass('broke');
}

function updateGlitch() {
    const i = Math.floor(Math.random() * 18);
    $('.glitch').css("background-position", '0% -' + (Math.round(i) * 1080) + 'px');
}

$(() => {
    if (window.location.hostname !== 'localhost') document.getElementById('music').play();
    setInterval(updateGlitch, 50);
    const table = $('<table></table>');
    const n = 30;
    for (let i = 0; i < n; i++) {
        const tr = $('<tr></tr>');
        for (let j = 0; j < n * 2; j++) {
            tr.append('<td></td>')
        }
        table.append(tr);
    }
    $('#floor').append(table);
    // grained('#gained', {
    //     animate: true,
    //     patternWidth: 100,
    //     patternHeight: 100,
    //     grainOpacity: 0.05,
    //     grainDensity: 1,
    //     grainWidth: 2,
    //     grainHeight: 2
    // });
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