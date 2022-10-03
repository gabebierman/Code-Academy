// VARIABLE PRACTICE

// -----------------------------------------------------------------
//! Familiarize yourself with object traversal.

// -----------------------------------------------------------------
//! Build an object with at least 3 layers deep of objects and practice logging to console.

// -----------------------------------------------------------------
//! Declare different variables of different types and practice those.

//! LOOP PRACTICE
//! -----------------------------------------------------------------
//! Run through all numbers from 1-100.
//!  - If the number is divisible by 2 log the number and "Fizz"
//!  - If the number is divisible by 3 log the number and "Buzz"
//!  - If the number is divisible by 2 AND 3 log the number and "FizzBuzz"

// -----------------------------------------------------------------
//! Take an input from the user. Starting with the 4th character,
//! log all characters until the end of the input.

// -----------------------------------------------------------------
//! If the input is shorter than 4 characters, nothing should be logged.

// -----------------------------------------------------------------
//! Pick a random number. Prompt the user to guess a number. If the number is correct,
//! end the loop and tell the user how many tries it took to guess.
//! If it is incorrect, continue the loop.
//! (Test functionality by logging the number that was randomly generated in the prompt).

// -----------------------------------------------------------------
//! Using nested for loops, create and log the following pattern:
/*
//!    *
//!    **
//!    ***
//!    ****
//!    *****
*/

// -----------------------------------------------------------------
//! Simulate a coin flip. Start a counter at 0. If the initial flip was heads,
//! leave the counter at 0 and log: "It took 0 retries to get heads!".
//! If the coin was tails, try again and keep doing so until heads happens. Log the amount of retries it took.

// let counter = -1; //? initialiazation - we create var and assign value
// let coin;         //? instantiation - we create var and hold memory

// let randomNum = Math.floor(Math.random()) ;
// while (coin !== 0){
//     coin = Math.floor(Math.random() * 2)
//     counter++;
// console.log(`trying again`)
// }
// console.log(counter)

// COMPARISON PRACTICE
// -----------------------------------------------------------------
//! Build a simple site that prompts a user for their first name and then a number
//! between one and one-hundred (inclusive).
//!  - Tell them whether their number is odd or even and if its greater than,
//!    or less than/equal to 50 and then log those messages separately to the console.
//!  - Log every number before theirs and every number from 100 counting down to theirs in two separate loops.
//!  - If their name is your name send an alert saying that it is a great name
//!  - Log their name in reverse to the console.

// parseInt(promtp())
// if else for odd even
// if else for greater than less than
// for loop count up and count down
// comparison for Name

// reverse string js

// let userName = prompt("What is your name?");
// let userNum = parseInt(prompt("Enter a number between 1 and 100"));

// for (let countTo = userNum - userNum ; countTo < userNum; countTo++){
//     console.log(countTo)
// }
// for (let countUp = userNum; countUp <= 100; countUp++){
//     console.log(countUp)
// }

// for (let i = 1 ; i <= userNum ; i++){
//   console.log(i)
// }

// for(let i = 100 ; i >= userNum ; i--){
//   console.log(i)
// }

// if (userNum % 2 === 0){
//     console.log(`${userNum} is even`)
// }
// else {
//     console.log(`${userNum} is odd`)
// }

// if (userNum <= 50){
//     console.log(`${userNum} is less than 50`)
// }
// else {
//     console.log(`${userNum} is more than 50`)
// }

// if (userName === "Gabe"){
//     console.log("THATS MY NAME GIVE ME MY NAME BACK")
// }
// else{
//     console.log("I like your name")
// }

//? if (userName.length <= 2){
//?     const revArray = [];
//?     const length = str.length - 1;
//?     for(let i = length; i >= 0, i--;){
//?         revArray.push(str[i]);
//?         revArray.Join('')
//?     }
//?     console.log(revArray)
//? }

// console.log(userName.split("").reverse().join(""));

// -----------------------------------------------------------------
//! Take the following arrays: `[-1,-2,2,10,7,8]` and `[4,-2,2,7,9,5]`
//! and see how many items the two arrays share in common.
//! Do this without prototypical functions. This will also require the use of loop(s)

// counter when array number matches increase
// nested for loop (0 of array one 0-end of array two , 1 of array one 0-end of array two , etc )

let a1 = [-1, -2, 2, 10, 7, 8];
let a2 = [4, -2, 2, 7, 9, 5, -2];
let inCom = 0;

for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
        console.log(a1[i], a2[j]);
        if (a1[i] === a2[j]) {
            inCom++;
            console.log(
                "Both arrays have the number " +
                    a2[j] +
                    "." +
                    ` That's ${inCom} numbers so far!`
            );
            break;
        }
    }
}

// -----------------------------------------------------------------
//!! Practice with the differences between `==` and `===`
