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
let numPlayers = 1;
const gameData = {
    game: 1,
    push: 0,
    compWin: 0,
    userWin: 0,
};
let discard = [];
let players = [];
let player = 0;
let points;
let compScore = 0;
let userScore = 0;
let userWin = false;
let compWin = false;

//start game

document.getElementById("start").addEventListener(
    "click",
    (startGame = () => {
        initDeck();
        shuffleDeck();
        players = [];
        newPlayers(numPlayers);
        dealCards();
        userWin = false;
        compWin = false;
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

//player objects in array

const newPlayers = (numPlayers) => {
    let hand = [];
    let player = { Name: "Computer", ID: 0, Points: 0, Hand: hand };
    players.push(player);
    for (let i = 1; i <= numPlayers; i++) {
        let hand = [];
        let player = { Name: "Player", ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
};

//deal the hand

const dealCards = () => {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < players.length; j++) {
            let card = deck.pop();
            players[j].Hand.push(card);
        }
    }
    getPoints(player);
};

//get current point total based on weight

const getPoints = (player) => {
    for (let i = 0; i < 2; i++) {
        player = i;
        points = 0;
        for (let i = 0; i < players[player].Hand.length; i++) {
            points = points + players[player].Hand[i].weight;
        }
        console.log(players[player], points);
        players[player].Points = points;
    }

    check21();
};

//check if any score is 21

const check21 = () => {
    compScore = players[0].Points;
    userScore = players[1].Points;
    if (compScore === 21 || userScore === 21) {
        if (compScore === 21) {
            compWin = true;
        } else {
            userWin = true;
        }
        endGame();
    } else if (21 < compScore || 21 < userScore) {
        if (21 < compScore) {
            userWin = true;
        } else {
            compWin = true;
        }
        endGame();
    } else if (compScore === userScore) {
        endGame();
        userWin = true;
        compWin = true;
    } else {
        return;
    }

    //else the user score is higher than the computer
};

//computer

const compPlay = () => {
    if (17 <= compScore && compScore <= 21) {
        endGame();
    }
    while (compScore < 17) {
        let card = deck.pop();
        players[0].Hand.push(card);
        getPoints();
        if (17 <= compScore && compScore <= 21) {
            endGame();
        } else if (21 < compScore) {
            endGame();
        }
    }
};

//hit
document.getElementById("hit").addEventListener(
    "click",
    (dealSingle = () => {
        let card = deck.pop();
        players[1].Hand.push(card);
        console.log(players[1].Hand);
        getPoints();
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
    console.log("end");
    if (userWin === true && compWin === true) {
        gameData.push++;
        document.getElementById("push").innerText = gameData.push++;
        console.log("push");
    } else if (userWin === true) {
        gameData.userWin++;
        document.getElementById("userWin").innerText = gameData.userWin;
        console.log("user win");
    } else {
        gameData.compWin++;
        document.getElementById("compWin").innerText = gameData.compWin;
        console.log("comp win");
    }
};

//create discard deck

// const deckDiscard = () => {
//     while (discard.length < deck.length) {}
//     console.log(discard);
// };

// while (deck.length < numCards) {
//     let card = this.getCard();
//     for (let drawnCard of drawnCards) {
//         let matchSuit = card.suit === drawnCard.suit;
//         let matchValue = card.value === drawnCard.value;
//         if (matchSuit && matchValue) {
//             card = this.getCard();
//         }
//     }
//     console.log(card);
//     drawnCards.push(card);
// }

// for (let drawnCard of drawnCards) {
//     for (let i = 0; i < deck.length; i++) {
//         let card = deck[i];
//         let matchSuit = card.suit === drawnCard.suit;
//         let matchValue = card.value === drawnCard.value;
//         if (matchSuit && matchValue) {
//             deck.splice(i, 1);
//             discard.push(card);

//put card values on table
