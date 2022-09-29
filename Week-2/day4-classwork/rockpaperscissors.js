function computerPick() {
    let ranNum = Math.floor(Math.random() * rpsArray.length);
    return rpsArray[ranNum];
}

const updateChoices = (e) => {
    const comPick = computerPick();
    document.getElementById("computer").innerText = "Computer picked " + comPick;
    document.getElementById("user").innerText = "You picked " + e.target.value;
    compare(e.target.value, comPick);
    document.getElementById("game").innerText = parseInt(document.getElementById("game").innerText) + 1;
};

const buttons = document.querySelectorAll(".choice");

buttons.forEach(function (button) {
    button.addEventListener("click", updateChoices);
});

document.getElementById("reset").addEventListener("click", () => {
    document.querySelectorAll("span").forEach((span) => {
        span.innerText = 0;
    });
});

const rpsArray = ["rock", "paper", "scissors"];

function compare(userPick, compPick) {
    function displayResult(result) {
        document.getElementById(result).innerText = parseInt(document.getElementById(result).innerText) + 1;
        document.getElementById("result").innerText = "It's a " + result + "!";
    }
    if (userPick === compPick) {
        displayResult("tie");
    }
    else if ((userPick === "rock" && compPick === "paper") || (userPick === "paper" && compPick === "scissors") || (userPick === "scissors" && compPick === "rock")) {
        displayResult("loss");
    }
    else {
        displayResult("win");
    }
}


