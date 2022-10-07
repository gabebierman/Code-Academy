// declare deck of cards
const suit = ["diamonds", "hearts", "spades", "clubs"];
const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
];
let deck = [];
let userCard;
let compCard;
let userScore;
let compScore;
const gameData = {
    game: 1,
    tied: 0,
    lose: 0,
    win: 0,
};
let discard = [];

//start game

document.getElementById("start").addEventListener(
    "click",
    (startGame = () => {
        initDeck();
        shuffleDeck();
        dealCards();
        document.getElementById("hit").disabled = false;
        document.getElementById("stay").disabled = false;
    })
);

//create deck

const initDeck = () => {
    deck = [];
    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let weight = parseInt(values[j]);
            if (values[j] === "J" || values[j] === "Q" || values[j] === "K") {
                weight = 10;
            } else if (values[j] === "A") {
                weight = 11;
            }
            let card = { value: values[j], suit: suit[i], weight: weight };
            deck.push(card);
        }
    }
    return deck;
};

// shuffle deck of cards

const shuffleDeck = () => {
    for (let i = 0; i < 1000; i++) {
        let card1 = Math.floor(Math.random() * deck.length);
        let card2 = Math.floor(Math.random() * deck.length);
        let random = deck[card1];
        deck[card1] = deck[card2];
        deck[card2] = random;
    }
    return deck;
};

//deal the hand

const dealCards = () => {
    let card1 = deck.pop();
    let card2 = deck.pop();
    let card3 = deck.pop();
    let card4 = deck.pop();
    userCard = [card1, card3];
    compCard = [card2, card4];
    console.log("user score " + userCard);
    console.log("comp score " + compCard);

    if (userScore === 21 || compScore === 21) {
        endGame();
    }
};

//computer
const compPlay = () => {
    if (17 <= compScore && compScore <= 21) {
        console.log("comp stay");
        endGame();
    } else if (21 < compScore) {
        endGame();
        console.log("comp bust");
    }
    while (compScore < 17) {
        compScore = compScore + deck.pop().weight;
        console.log(compScore);
        if (17 <= compScore && compScore <= 21) {
            endGame();
            console.log("comp stay");
        } else if (21 < compScore) {
            endGame();
            console.log("comp bust");
        }
    }
};

//hit
document.getElementById("hit").addEventListener(
    "click",
    (dealSingle = () => {
        userScore = userScore + deck.pop().weight;
        console.log("user hit , new score " + userScore);
        if (21 < userScore) {
            endGame();
            console.log("user bust");
        }
        if (userScore === 21 || compScore === 21) {
            endGame();
        }
    })
);

//stay
document.getElementById("stay").addEventListener("click", compPlay);

//end the game
const endGame = () => {
    document.getElementById("hit").disabled = true;
    document.getElementById("stay").disabled = true;
    gameData.game++;
    document.getElementById("game").innerText = gameData.game;
    if (userScore === compScore) {
        gameData.tied++;
        document.getElementById("push").innerText = gameData.tied;
        console.log("draw");
    } else if (21 < userScore) {
        gameData.lose++;
        document.getElementById("compWin").innerText = gameData.lose;
        console.log("user bust comp win");
    } else if (21 < compScore) {
        gameData.win++;
        document.getElementById("userWin").innerText = gameData.win;
        console.log("comp bust user win");
    } else if (userScore - compScore < 0) {
        console.log("comp win");
        gameData.lose++;
        document.getElementById("compWin").innerText = gameData.lose;
    } else {
        console.log("user win");
        gameData.win++;
        document.getElementById("userWin").innerText = gameData.win;
    }
};

//create discard deck

const deckDiscard = () => {
    while (discard.length < deck.length) {}
    console.log(discard);
};

//draw cards

//put card values on table
