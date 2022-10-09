let suit = ["Hearts", "Clubs", "Diamonds", "Spades"];
let value = [
    "Ace",
    "King",
    "Queen",
    "Jack",
    "Ten",
    "Nine",
    "Eight",
    "Seven",
    "Six",
    "Five",
    "Four",
    "Three",
    "Two",
];
let gameText = document.getElementById("gameStatus");
let deal = document.getElementById("deal");
let hitButton = document.getElementById("hit");
let stayButton = document.getElementById("stay");
let shuffle = document.getElementById("shuffle");
let compCardArea = document.getElementById("compCards");
let userCardArea = document.getElementById("userCards");

let gamesStarted = false;
let gameOver = false;
let playerWon = false;
let compCards = [];
let userCards = [];
let compScore = 0;
let userScore = 0;
let deck = [];
const gameData = {
    game: 0,
    push: 0,
    lose: 0,
    win: 0,
};
let card;
let compHand;

deal.addEventListener(
    "click",
    (start = () => {
        gamesStarted = true;
        gameOver = false;
        playerWon = false;
        shuffleDeck(deck);
        compCards = [getCard(), getCard()];
        userCards = [getCard(), getCard()];
        compCardArea.innerHTML = "";
        userCardArea.innerHTML = "";
        gameStatus();
        gameText.innerText = "Game in Progress";
    })
);

hitButton.addEventListener(
    "click",
    (hit = () => {
        userCards.push(getCard());
        gameEndCheck();
        gameStatus();
    })
);

stayButton.addEventListener(
    "click",
    (stay = () => {
        gameOver = true;
        gameEndCheck();
        gameStatus();
    })
);

const initDeck = () => {
    let deck = [];
    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < value.length; j++) {
            let card = {
                suit: suit[i],
                value: value[j],
            };
            deck.push(card);
        }
    }
    return deck;
};

const gameStatus = () => {
    let dealerCardString = "";
    for (let i = 0; i < compCards.length; i++) {
        dealerCardString += getCardString(compCards[i]) + "\n";
    }

    let playerCardString = "";
    for (let i = 0; i < userCards.length; i++) {
        playerCardString += getCardString(userCards[i]) + "\n";
    }

    updateScores();
    compCardArea.innerHTML = "";
    compHand = dealerCardString.split("\n");
    if (gameOver === false) {
        thisCard = compHand[0];
        cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        let card = document.createElement("img");
        card.src = `./cards/FaceDown.png`;
        compCardArea.appendChild(cardDiv);
        cardDiv.appendChild(card);
        for (let i = 1; i < compCards.length; i++) {
            let thisCard = compHand[i].replace(/[^a-z]/gi, "");
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            let card = document.createElement("img");
            card.src = `./cards/${thisCard}.png`;
            compCardArea.appendChild(cardDiv);
            cardDiv.appendChild(card);
        }
    } else if (gameOver === true) {
        for (let i = 0; i < compCards.length; i++) {
            let thisCard = compHand[i].replace(/[^a-z]/gi, "");
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            let card = document.createElement("img");
            card.src = `./cards/${thisCard}.png`;
            compCardArea.appendChild(cardDiv);
            cardDiv.appendChild(card);
        }
    }

    userCardArea.innerHTML = "";
    let userHand = playerCardString.split("\n");
    for (let i = 0; i < userCards.length; i++) {
        let thisCard = userHand[i].replace(/[^a-z]/gi, "");
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        let card = document.createElement("img");
        card.src = `./cards/${thisCard}.png`;
        userCardArea.appendChild(cardDiv);
        cardDiv.appendChild(card);
    }
    document.getElementById("userScore").innerText = `${userScore}`;
    if (gameOver) {
        gameData.game++;
        document.getElementById("game").innerText = gameData.game;
        if (playerWon) {
            gameText.innerText = `You won with ${userScore}`;
        } else {
            gameText.innerText = `Computer won with ${compScore}`;
        }
    }
    if (deck.length < 5) {
        gameText.innerText = "Not enough cards, you need to shuffle the deck";
        document.getElementById("deal").disabled = true;
        document.getElementById("stay").disabled = true;
        document.getElementById("hit").disabled = true;
    }
};

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let swapCard = Math.floor(Math.random() * deck.length);
        let temp = deck[swapCard];
        deck[swapCard] = deck[i];
        deck[i] = temp;
    }
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}

function getCard() {
    return deck.shift();
}

function cardGetValue(card) {
    if (card.value === "Ace") {
        return 1;
    } else if (card.value === "Two") {
        return 2;
    } else if (card.value === "Three") {
        return 3;
    } else if (card.value === "FOur") {
        return 4;
    } else if (card.value === "Five") {
        return 5;
    } else if (card.value === "Six") {
        return 6;
    } else if (card.value === "Seven") {
        return 7;
    } else if (card.value === "Eight") {
        return 8;
    } else if (card.value === "Nine") {
        return 9;
    } else {
        return 10;
    }
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for (let i = 0; i < cardArray.length; i++) {
        let card = cardArray[i];
        score += cardGetValue(card);
        if (card.value === "Ace") {
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }
    return score;
}

function updateScores() {
    compScore = getScore(compCards);
    userScore = getScore(userCards);
    if (gameOver === true) {
        for (let i = 0; i < compCards.length; i++) {
            let thisCard = compHand[i].replace(/[^a-z]/gi, "");
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            let card = document.createElement("img");
            card.src = `./cards/${thisCard}.png`;
            compCardArea.appendChild(cardDiv);
            cardDiv.appendChild(card);
        }
    }
}

function gameEndCheck() {
    updateScores();

    if (gameOver) {
        while (compScore < userScore && userScore <= 21 && compScore <= 21) {
            compCards.push(getCard());
            updateScores();
        }
    }
    if (userScore > 21) {
        playerWon = false;
        gameOver = true;
        gameData.lose++;
        document.getElementById("compWin").innerText = gameData.lose;
    } else if (compScore > 21) {
        playerWon = true;
        gameOver = true;
        gameData.win++;
        document.getElementById("userWin").innerText = gameData.win;
    } else if (userScore === 21 && compScore === 21) {
        gameData.push++;
        document.getElementById("compWin").innerText = gameData.push;
        gameText.innerText = `Draw`;
    } else if (gameOver) {
        if (userScore > compScore) {
            playerWon = true;
            gameData.win++;
            document.getElementById("userWin").innerText = gameData.win;
        } else {
            playerWon = false;
            gameData.lose++;
            document.getElementById("compWin").innerText = gameData.lose;
        }
    }
}

shuffle.addEventListener(
    "click",
    (cardShuffle = () => {
        // console.log("button clicked");
        deck = initDeck();
        shuffleDeck();
        document.getElementById("deal").disabled = false;
        document.getElementById("stay").disabled = false;
        document.getElementById("hit").disabled = false;
    })
);

window.addEventListener(
    "load",
    (newDeck = () => {
        deck = initDeck();
    })
);
