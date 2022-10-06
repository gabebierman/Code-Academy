// test button (tuns all functions listed on page)
document.getElementById("test").addEventListener(
    "click",
    (runAll = () => {
        initDeck();
        shuffleDeck();
        dealCards();
    })
);

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
let userScore;
let compScore;

function initDeck() {
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
}
// shuffle deck of cards

function shuffleDeck() {
    for (let i = 0; i < 1000; i++) {
        let card1 = Math.floor(Math.random() * deck.length);
        let card2 = Math.floor(Math.random() * deck.length);
        let random = deck[card1];
        deck[card1] = deck[card2];
        deck[card2] = random;
    }
    return deck;
}

//deal the hand

function dealCards() {
    userScore = deck.pop().weight;
    compScore = deck.pop().weight;
    userScore = userScore + deck.pop().weight;
    compScore = compScore + deck.pop().weight;
    console.log("user score " + userScore);
    console.log("comp score " + compScore);
}

//computer
function compPlay() {
    console.log(compScore);
    if (21 < compScore) {
        console.log("comp bust");
    } else if (17 <= compScore && compScore <= 21) {
        console.log("comp stay");
    } else {
        let hit = deck.pop();
        console.log("comp hit");
        compScore = compScore + hit.weight;
        console.log(compScore);
        if (17 <= compScore && compScore <= 21) {
            console.log("comp stay");
        } else if (21 < compScore) {
            console.log("comp bust");
        } else {
            console.log("comp hit");
            compScore = compScore + deck.pop().weight;
            console.log(compScore);
            if (17 <= compScore && compScore <= 21) {
                console.log("comp stay");
            } else if (21 < compScore) {
                console.log("comp bust");
            } else {
                console.log("comp hit");
                compScore = compScore + deck.pop().weight;
                console.log(compScore);
            }
        }
    }
}

//user player

//hit
document.getElementById("hit").addEventListener(
    "click",
    (dealSingle = () => {
        userScore = userScore + deck.pop().weight;
        console.log("user hit , new score " + userScore);
    })
);

//stay
document.getElementById("stay").addEventListener("click", compPlay);

//start the game

//render cards and add to hand

//hit button

//stay button

//determine outcome

//add cards to discard
