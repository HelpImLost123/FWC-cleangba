$('#change-bg').on('click', function() {
    $('body').css('background-color', randomColor());
});


function randomINT(i, j) {
    return Math.floor(Math.random() * (j + 1)) + i;
}

function randomColor() {
    r = randomINT(0, 255);
    g = randomINT(0, 255);
    b = randomINT(0, 255);
    return `rgb(${r},${g},${b})`;
}