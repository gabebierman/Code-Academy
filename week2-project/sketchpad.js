//- Allow the user to select any of the three colors and use some form of CSS (in this case the white border around red) to show which
//color is selected

//- On mouse down on the canvas, start drawing on the canvas until the user releases the mouse or leaves the canvas. The color of the line
//should correspond to the selected color on the right.

//- When a user clicks add color, it should add the new color to the bottom of the other color buttons and be able to be selected
//for use on the canvas.

//- Feel free to add more functionality, such as a way to clear the canvas, change the stroke size, add a better cursor etc.

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

//

let redSlide = document.querySelector("#slideRed");
let greenSlide = document.querySelector("#slideGreen");
let blueSlide = document.querySelector("#slideBlue");
let colorDisplay = document.getElementById("color");

function setColor() {
    let redVal = parseInt(redSlide.value);
    let greenVal = parseInt(greenSlide.value);
    let blueVal = parseInt(blueSlide.value);
    rgbVal = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
    colorDisplay.style.backgroundColor = rgbVal;
}

redSlide.addEventListener("change", setColor);

redSlide.addEventListener("input", setColor);

greenSlide.addEventListener("change", setColor);

greenSlide.addEventListener("input", setColor);

blueSlide.addEventListener("change", setColor);

blueSlide.addEventListener("input", setColor);

//

let redOpt = document.querySelector("#redOpt");
let blueOpt = document.querySelector("#blueOpt");
let greenOpt = document.querySelector("#greenOpt");

function selectColor(e) {
    let clickBGColor = e.target.style.backgroundColor;
    strokeColor = clickBGColor;
    // e.target.focus((e.target.style.border = "2px solid white"));
    e.target.focus();
}

redOpt.addEventListener("click", selectColor);
blueOpt.addEventListener("click", selectColor);
greenOpt.addEventListener("click", selectColor);
colorDisplay.addEventListener("click", selectColor);

let colorOption = document.getElementsByClassName("color-option");

colorOption.addEventListener("focus", boxBorder);
colorOption.addEventListener("blur", boxBorder);

function boxBorder() {
    // if (focus) {
    border = "2px solid white";
    // } else {
    //     border = "";
    // }
}
