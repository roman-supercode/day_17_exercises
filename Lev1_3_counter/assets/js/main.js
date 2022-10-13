let count = 0;

function einMehr() {
    count += 1;
    document.getElementById("counter").innerHTML = count;
}

function einWeniger() {
    count -= 1;
    document.getElementById("counter").innerHTML = count;
}

function zehnMehr() {
    count += 10;
    document.getElementById("counter").innerHTML = count;
}

function zehnWeniger() {
    count -= 10;
    document.getElementById("counter").innerHTML = count;
}

function hundertMehr() {
    count += 100;
    document.getElementById("counter").innerHTML = count;
}

function hundertWeniger() {
    count -= 100;
    document.getElementById("counter").innerHTML = count;
}

function resetNull() {
    count = 0;
    document.getElementById("counter").innerHTML = count;
}

function multi() {
    count *= 2;
    document.getElementById("counter").innerHTML = count;
}