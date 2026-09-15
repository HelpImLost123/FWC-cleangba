const balloon = $('#balloon');
const colors = ['red', 'green', 'blue'];

balloon.on('click', function() {
    if (balloon.hasClass('red')) {
        changeBalloonColor('green');
    } else if (balloon.hasClass('green')) {
        changeBalloonColor('blue');
    } else {
        changeBalloonColor('red');
    }

    increaseSize();
});

balloon.on('mouseleave', function() {
    if (balloon.hasClass('red')) {
        changeBalloonColor('blue');
    } else if (balloon.hasClass('green')) {
        changeBalloonColor('red');
    } else {
        changeBalloonColor('green');
    }

    decreaseSize();
});

function changeBalloonColor(newColor) {
    colors.forEach((color) => {
        balloon.removeClass(color)
    });
    balloon.addClass(newColor);
}

function increaseSize() {
    let size = parseInt(balloon.css('width'), 10) + 10;
    if (size > 420) size = 200;
    balloon.css({
        width: size + 'px',
        height: size + 'px'
    })
}

function decreaseSize() {
    let size = Math.max(parseInt(balloon.css('width'), 10) - 5, 200);
    balloon.css({
        width: size + 'px',
        height: size + 'px'
    })
}