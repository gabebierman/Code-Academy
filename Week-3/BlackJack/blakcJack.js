// test button (tuns all functions listed on page)
document.querySelector("button").addEventListener(
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
let user = [];
let comp = [];

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
    let user1 = [deck.pop()];
    let comp1 = [deck.pop()];
    user = [...user1, deck.pop()];
    comp = [...comp1, deck.pop()];
    console.log(user);
    console.log(comp);
}

//computer
function compPlay() {
    let cardWeight = comp[0].weight + comp[1].weight;
    console.log(cardWeight);
    if (21 < cardWeight) {
        console.log("comp bust");
    } else if (17 <= cardWeight && cardWeight <= 21) {
        console.log("comp stay");
    } else {
        let hit = deck.pop();
        console.log("comp hit");
        hitWeight = cardWeight + hit.weight;
        console.log(hitWeight);
        if (17 <= hitWeight && hitWeight <= 21) {
            console.log("comp stay");
        } else if (21 < hitWeight) {
            console.log("comp bust");
        } else {
            console.log("comp hit");
            hitWeight = hitWeight + deck.pop().weight;
            console.log(hitWeight);
            if (17 <= hitWeight && hitWeight <= 21) {
                console.log("comp stay");
            } else if (21 < hitWeight) {
                console.log("comp bust");
            } else {
                console.log("comp hit");
                hitWeight = hitWeight + deck.pop().weight;
                console.log(hitWeight);
            }
        }
    }
}

//user player

//start the game

//render cards and add to hand

//hit button

//stay button

//determine outcome

//add cards to discard
