function neonOn() {
    $('.neon').addClass('on');
}

function brokeNeon() {
    $('.neon').toggleClass('broke');
}

$(() => {
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
    grained('#gained', {
        animate: true,
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.05,
        grainDensity: 1,
        grainWidth: 2,
        grainHeight: 2
    });
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