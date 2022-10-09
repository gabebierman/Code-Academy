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
let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("newGame");
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

hitButton.style.display = "none";
stayButton.style.display = "none";

newGameButton.addEventListener(
    "click",
    (start = () => {
        gamesStarted = true;
        gameOver = false;
        playerWon = false;
        deck = initDeck();
        shuffleDeck(deck);
        compCards = [getCard(), getCard()];
        userCards = [getCard(), getCard()];
        compCardArea.innerHTML = "";
        userCardArea.innerHTML = "";
        newGameButton.style.display = "none";
        hitButton.style.display = "inline";
        stayButton.style.display = "inline";
        gameStatus();
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
    if (gamesStarted === false) {
        textArea.innerText = "Welcome to BlackJack";
        return;
    }

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
    let compHand = dealerCardString.split("\n");
    for (let i = 0; i < compCards.length; i++) {
        let thisCard = compHand[i].replace(/[^a-z]/gi, "");
        let card = document.createElement("img");
        compCardArea.appendChild(card);
        card.src = `./cards/${thisCard}.png`;
    }
    userCardArea.innerHTML = "";
    let userHand = playerCardString.split("\n");
    for (let i = 0; i < userCards.length; i++) {
        let thisCard = userHand[i].replace(/[^a-z]/gi, "");
        let card = document.createElement("img");
        userCardArea.appendChild(card);
        card.src = `./cards/${thisCard}.png`;
    }

    textArea.innerText =
        "comp has: \n " +
        dealerCardString +
        "(score:" +
        compScore +
        ")\n\n" +
        "Player has: \n " +
        playerCardString +
        "(score:" +
        userScore +
        ")\n\n";

    if (gameOver) {
        if (playerWon) {
            textArea.innerText += "You Win!";
        } else {
            textArea.innerText += "comp Wins!";
        }
        newGameButton.style.display = "inline";
        hitButton.style.display = "none";
        stayButton.style.display = "none";
    }
};

function shuffleDeck(deck) {
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
    } else if (compScore > 21) {
        playerWon = true;
        gameOver = true;
    } else if (gameOver) {
        if (userScore > compScore) {
            playerWon = true;
        } else {
            playerWon = false;
        }
    }
}

const deckDiscard = () => {
    if (deck.length < 5) {
        console.log("not enough cards");
        // document.getElementById("start").disabled = true;
        // document.getElementById("stay").disabled = true;
        // document.getElementById("hit").disabled = true;
    }
};

shuffle.addEventListener(
    "click",
    (shuffle = () => {
        initDeck(), shuffleDeck();
        // document.getElementById("start").disabled = false;
        // document.getElementById("stay").disabled = false;
        // document.getElementById("hit").disabled = false;
    })
);
