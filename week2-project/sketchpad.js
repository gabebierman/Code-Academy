//- Allow the user to select any of the three colors and use some form of CSS (in this case the white border around red) to show which
//color is selected

//- On mouse down on the canvas, start drawing on the canvas until the user releases the mouse or leaves the canvas. The color of the line
//should correspond to the selected color on the right.

//When the sliders are moved, the color in the box to the left of the sliders (in this case the purplish box) should adjust color
//according to the new `rgb()` values;

//- When a user clicks add color, it should add the new color to the bottom of the other color buttons and be able to be selected
//for use on the canvas.

//- Feel free to add more functionality, such as a way to clear the canvas, change the stroke size, add a better cursor etc.

//! pick color from preset - colorSelect(e) => e.target.backgroundColor

const canvas = document.getElementById("canvas");
const canvasInfo = canvas.getContext("2d");
let coord = { x: 0, y: 0 };
let strokeColor = "#000000";

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();

function resize() {
    canvasInfo.canvas.width = window.innerWidth;
    canvasInfo.canvas.height = window.innerHeight;
}
function reposition(e) {
    coord.x = e.clientX - canvas.offsetLeft;
    coord.y = e.clientY - canvas.offsetTop;
}
function start(e) {
    document.addEventListener("mousemove", draw);
    reposition(e);
}
function stop() {
    document.removeEventListener("mousemove", draw);
}
function draw(e) {
    canvasInfo.beginPath();
    canvasInfo.lineWidth = 5;
    canvasInfo.lineCap = "round";
    canvasInfo.strokeStyle = strokeColor;
    canvasInfo.moveTo(coord.x, coord.y);
    reposition(e);
    canvasInfo.lineTo(coord.x, coord.y);
    canvasInfo.stroke();
}

// let slider = document.getElementsByClassName("");
// let output = document.getElementById("demo");
// output.innerHTML = slider.value;
// slider.oninput = function () {
//     output.innerHTML = this.value;
// };

let red = document.querySelector("#slideRed");
let green = document.querySelector("#slideGreen");
let blue = document.querySelector("#slideBlue");
let colorDisplay = document.getElementById("color");

function setColor() {
    var rHex = parseInt(red.value, 10).toString(16),
        gHex = parseInt(green.value, 10).toString(16),
        bHex = parseInt(blue.value, 10).toString(16),
        hex = "#" + pad(rHex) + pad(gHex) + pad(bHex);
    colorDisplay.style.backgroundColor = hex;
    // hexOut.value = hex;
}

function pad(n) {
    return n.length < 2 ? "0" + n : n;
}

red.addEventListener(
    "change",
    function () {
        setColor();
        // r_out.value = r.value;
    },
    false
);

red.addEventListener(
    "input",
    function () {
        setColor();
        // r_out.value = r.value;
    },
    false
);

green.addEventListener(
    "change",
    function () {
        setColor();
        // g_out.value = g.value;
    },
    false
);

green.addEventListener(
    "input",
    function () {
        setColor();
        // g_out.value = g.value;
    },
    false
);

blue.addEventListener(
    "change",
    function () {
        setColor();
        // b_out.value = b.value;
    },
    false
);

blue.addEventListener(
    "input",
    function () {
        setColor();
        // b_out.value = b.value;
    },
    false
);
