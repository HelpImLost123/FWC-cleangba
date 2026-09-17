const left = document.getElementById("left");
const operator = document.getElementById("operator");
const right = document.getElementById("right");
const submit = document.getElementById("submit");

submit.addEventListener('click', () => {
    l = parseInt(left.value, 10);
    r = parseInt(right.value, 10);

    if (isNaN(l) || isNaN(r) || l < 0 || r < 0) {
        alert('Error :(');
        console.log('Error :(');
        return;
    }

    operate(l, r);
});

function operate(l, r) {
    const opt = operator.value;
    switch (opt) {
        case "+":
            result = l + r;
            alert(result);
            console.log(result);
            break;
        case "-":
            result = l - r;
            alert(result);
            console.log(result);
            break;
        case "*":
            result = l * r;
            alert(result);
            console.log(result);
            break;
        case "/":
            if (r == 0) {
                alertOver();
                break;
            }
            result = l / r;
            alert(result);
            console.log(result);
            break;
        case "%":
            if (r == 0) {
                alertOver();
                break;
            }
            result = l % r;
            alert(result);
            console.log(result);
            break;
        default:
            console.log("HOW DID YOU GET HERE!");
            alert("HOW DID YOU GET HERE!");
    }
}

function alertOver() {
    console.log("It's over 9000!");
    alert("It's over 9000!");
}

setInterval(() => {
   alert("Please, use me...");
}, 30000);