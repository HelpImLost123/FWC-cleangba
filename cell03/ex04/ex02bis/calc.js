$("#submit").on('click', function() {
    l = parseInt($("#left").val(), 10);
    r = parseInt($("#right").val(), 10);

    if (isNaN(l) || isNaN(r) || l < 0 || r < 0) {
        alert('Error :(');
        console.log('Error :(');
        return;
    }

    operate(l, r);
});

function operate(l, r) {
    switch ($("#operator").val()) {
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