// highlightDiv();

//? Build a whack-a-mole game:

// Have a grid of divs / containers on your page. They should all be the same size and be at least a 5x5 grid although you can add more if you would like
// Have a start button that the user can click to start the game
// When the game starts, show a timer for X amount of seconds. X can be any value you would like but should be no more than 30 seconds.
// Every second or every random amount of time, have one of the divs light up by adding a class to it. After a reasonable (your call) amount of time remove the color change to that div and have it revert to normal.
// If a user clicks one of the divs while it is lit up, a score counter at the top should increment by one.
// After the timer ends, the cycle should stop and the user should see their score and have the ability to start a new game. Starting a new game should reset the score and start over.
// If you would like / have time add the ability to choose a difficulty when the user starts the game.

//* click when box is lit up
// if click is true while backgroundcolor is x then hitCounter++
// if e => e.target.backgroundColor === highlightColor {hitCounter++}

const hitCount = { hit: 1 };

function clickLog(e) {
    let targetBGColor = "green";
    let clickBGColor = e.target.className;
    console.log(clickBGColor);
    if (clickBGColor === targetBGColor) {
        // hitCount++
        console.log("hit");
        document.getElementById("count").innerText = hitCount.hit++;
    } else {
        console.log("miss");
    }
}

let divClick = document.querySelectorAll("div");

divClick.forEach((btn) => {
    btn.addEventListener("click", clickLog);
});

let butStart = document.querySelectorAll("#start");

butStart.forEach((btn) => {
    btn.addEventListener("click", highlightDiv);
});

let divMole = document.getElementsByTagName("div");

let clock = document.getElementById("clock");

function highlightDiv() {
    let randomDiv = divMole[Math.floor(Math.random() * divMole.length)];
    randomDiv.className = "green";
    setTimeout(() => {
        randomDiv.className = "";
        setTimeout(highlightDiv, 500);
    }, 500);
}
let timer = 10;
clock.innerText = timer;
let timeRef = setInterval(() => {
    timer--;
    clock.innerText = timer;
    clearInterval(timeRef);
}, 1000);
