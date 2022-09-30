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

let gameActive = false;

let butStart = document.querySelectorAll("#start");

let difTime;

function playGame() {
    if (gameActive === false) {
        gameActive = true;

        //easy
        if (document.getElementById("easy").checked === true) {
            highlightDiv();
            difTime = 1000;
        } else if (document.getElementById("medium").checked === true) {
            highlightDiv();
            setTimeout(() => {
                highlightDiv();
            }, 500);
            difTime = 750;
        } else if (document.getElementById("hard").checked === true) {
            highlightDiv();
            setTimeout(() => {
                highlightDiv();
            }, 333);

            setTimeout(() => {
                highlightDiv();
            }, 666);
            difTime = 500;
        }

        //game time
        timerCount();
        setTimeout(() => {
            clearInterval(timeRef);
            gameActive = false;
            timer = 10;
        }, timer * 1000);
        document.getElementById("count").innerText = "Score: 0";
        hitCount.hit = 1;
        clock.innerText = timer;
    }
}

function clickLog(e) {
    let targetBGColor = "green";
    let clickBGColor = e.target.className;
    console.log(clickBGColor);
    if (clickBGColor === targetBGColor) {
        // hitCount++
        console.log("hit");
        document.getElementById("count").innerText = "Score: " + hitCount.hit++;
    } else {
        console.log("miss");
    }
}

let divClick = document.querySelectorAll("div");

divClick.forEach((btn) => {
    btn.addEventListener("click", clickLog);
});

let timer = 10;

butStart.forEach((btn) => {
    btn.addEventListener("click", playGame);
});

let divMole = document.getElementsByClassName("mole");

let clock = document.getElementById("clock");

clock.innerText = timer;

//one random box, higlight, move on

let timeRef = 1000;

function highlightDiv() {
    let randomDiv = divMole[Math.floor(Math.random() * divMole.length)];
    randomDiv.className = "green";
    setTimeout(() => {
        randomDiv.className = "";
        if (gameActive) {
            setTimeout(highlightDiv, 500);
        }
    }, difTime);
}

//set timer, increment, stop timer
function timerCount() {
    let timeRef = setInterval(() => {
        timer--;
        clock.innerText = timer;
    }, 1000);
    setTimeout(() => {
        clearInterval(timeRef);
    }, timer * 1000);
}
