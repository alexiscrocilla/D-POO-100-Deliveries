var a = 2
var b = 4
var action = "sub"

function subtraction(a, b) {
    return a - b;
}

function addition(a, b) {
    return a + b;
}

function calculator() {
    if (action == 'sub') {
        return subtraction (a, b);
    } else if (action == 'add') {
        return addition(a, b);
    } else {
        return null;
    }
}
