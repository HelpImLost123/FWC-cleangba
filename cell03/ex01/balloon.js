const balloon = document.getElementById("balloon");
const colors = ['red', 'green', 'blue'];

balloon.addEventListener('click', () => {
    if (balloon.classList.contains('red')) {
        changeBalloonColor('green');
    } else if (balloon.classList.contains('green')) {
        changeBalloonColor('blue');
    } else {
        changeBalloonColor('red');
    }

    increaseSize();
});

balloon.addEventListener('mouseleave', () => {
    if (balloon.classList.contains('red')) {
        changeBalloonColor('blue');
    } else if (balloon.classList.contains('green')) {
        changeBalloonColor('red');
    } else {
        changeBalloonColor('green');
    }

    decreaseSize();
});

function changeBalloonColor(newColor) {
    colors.forEach((color) => {
        balloon.classList.remove(color)
    });
    balloon.classList.add(newColor);
}

function increaseSize() {
    size = balloon.offsetWidth + 10;
    if (size > 420) size = 200;
    balloon.style.setProperty('width', `${size}px`);
    balloon.style.setProperty('height', `${size}px`);
}

function decreaseSize() {
    size = Math.max(balloon.offsetWidth - 5, 200);
    balloon.style.setProperty('width', `${size}px`);
    balloon.style.setProperty('height', `${size}px`);
}