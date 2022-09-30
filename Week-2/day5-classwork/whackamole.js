const hitCount = { hit: 1 };

let gameActive = false;

let timer = 10;

let timeRef = 1000;

let difTime;

let butStart = document.querySelectorAll("#start");

let divClick = document.querySelectorAll("div");

let divMole = document.getElementsByClassName("mole");

let clock = document.getElementById("clock");

clock.innerText = "Time remaining: 0";

divClick.forEach((btn) => {
    btn.addEventListener("click", clickLog);
});

butStart.forEach((btn) => {
    btn.addEventListener("click", playGame);
});

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
        } else {
            document.getElementById("start").innerText =
                "Please choose a difficulty";
            timer = 0;
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
        clock.innerText = "Time remaining: " + timer;
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

function timerCount() {
    let timeRef = setInterval(() => {
        timer--;
        clock.innerText = "Time remaining: " + timer;
    }, 1000);
    setTimeout(() => {
        clearInterval(timeRef);
    }, timer * 1000);
}
