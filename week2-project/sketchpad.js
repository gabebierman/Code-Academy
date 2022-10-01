//- Allow the user to select any of the three colors and use some form of CSS (in this case the white border around red) to show which
//color is selected

//- On mouse down on the canvas, start drawing on the canvas until the user releases the mouse or leaves the canvas. The color of the line
//should correspond to the selected color on the right.

//- At the bottom have three sliders representing red green and blue, they should allow for a numerical value from 0-255.

//When the sliders are moved, the color in the box to the left of the sliders (in this case the purplish box) should adjust color
//according to the new `rgb()` values;

//- When a user clicks add color, it should add the new color to the bottom of the other color buttons and be able to be selected
//for use on the canvas.

//- Feel free to add more functionality, such as a way to clear the canvas, change the stroke size, add a better cursor etc.

//! pick color from preset - colorSelect(e) => e.target.backgroundColor

//! var slider = document.getElementById("myRange");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value;
//slider.oninput = function() {output.innerHTML = this.value;}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext();
let coord = { x: 0, y: 0 };

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();

function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
function reposition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}
function start(event) {
    document.addEventListener("mousemove", draw);
    reposition(event);
}
function stop() {
    document.removeEventListener("mousemove", draw);
}
function draw(event) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#ACD3ED";
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}
