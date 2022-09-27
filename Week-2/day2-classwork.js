//! Write the following functions:

// -----------------------------------------------------------------
//! Pass a number into a function that will return the absolute value of that number
//! (absolute value of -1 is 1 and abs of 1 is 1) without the use of built in math functions.

// const absoluteValue = (int) => (int < 0) ? (0-int) : (int) ; 

// function abValue(int){
//     if (int < 0) {
//         return(0 - int)
//     }
//     return(int)
// }

// -----------------------------------------------------------------
//! Make a function called pow that accepts arguments x and y and returns the value of x to the y power

// function pow(x, y){
//     let int = 1;
//     for(let i = 1; i <= y; i++){
//         parseInt(int = int * x);
//     }
//     return int;
// }

// const power = (x,y) => parseInt(Math.pow(x, y));

// -----------------------------------------------------------------
//! Write a function that checks to see if the word as an argument is a palindrome (case insensitive)
//! and log the result to the console.

//? take input, convert to all lowercase, 

const nascar = (word) => {
    const reverseWord = word.split("").reverse().join("");
    if (reverseWord.toLowerCase() === word.toLowerCase()) {
        console.log("true");
    } else{
        console.log("not");
    }
};



// -----------------------------------------------------------------
//! Write a function that accepts an array of banned words and an array of words.
//! If any of the banned words appear in the array of words (case sensitive),
//! replace them with "REDACTED", do this without any prototypical functions

// let arrWords = ["apple" , "orange" , "lemon" , "pear" , "orange"] ;
// let bannedWords = ["orange" , "banana" , "lime" , "Apple"];

// const redacted = (toCensor, banned) => {
//     for(let i = 0 ; i < toCensor.length ; i++){
//         for(let j = 0 ; j < banned.length ; j++){   
//             if(toCensor[i] === banned[j]){
//                 toCensor[i] = "REDACTED";
//                 }
//             }
//         }
//     return toCensor;
// }

// console.log(redacted(arrWords, bannedWords))

// -----------------------------------------------------------------
//! Write a function that accepts two arguments (names can be changed):a and b.
//! Cycle through all numbers between a and b (inclusive) and
//!  - if the number is divisible by 2 log "Fizz" if the number is divisible by 3 log "Buzz"
//!  - if it is divisible by both log "FizzBuzz" otherwise log the number.
//!  - if a==b log nothing,
//! if b < a count down otherwise count up

//? function name(a,b){}
//? i = a j = b while i !== j 




function fizzBuzz(a,b){
    function fbLogger(num){
        if(num % 3 === 0 && num % 2 === 0) {
            console.log("FizzBuzz");
        }
        else if(num % 2 === 0 ) {
            console.log("Fizz");
        }
        else if(num % 3 === 0) {
            console.log("Buzz");
        }
        else{
            console.log(num);
        }
    }    
if(b < a){
        for(let i = a; i >= b ; i--){
            fbLogger(i);
        }
    } else if(b > a){
        for(let i = b; i <= b ; i++){
            fbLogger(i);
        }
    }
}

// fizzBuzz(30, 60)
// fizzBuzz(80, 42)

// -----------------------------------------------------------------
//! Write a function that takes a day month and year (in whatever format you choose)
//! and return what day that was. Try doing this both WITH and WITHOUT the use of built in libraries.

// -----------------------------------------------------------------
//! Write a function to see if a pizza can be split evenly amongst a group of people.
//! The function should take two arguments: the number of people present, and the number of slices of the pizza.
//!   - If it can be split evenly log the result
//!   - If it cannot, say it cannot be split evenly and ALSO list how many people will go without an extra slice.

function thatsEnoughSlices(people, slices){
    if(slices % people !== 0){
        // console.log("running if")
        let split = people - (people - slices)
        console.log(split + " People will go without an extra slice")
    }
    else{
        let split = (slices / people)
        console.log("Each person gets " + split + " slice(s)")
        // console.log("even split")
    }
}

// thatsEnoughSlices(3,9); //even slpit
// thatsEnoughSlices(10,3); //runnning if

// -----------------------------------------------------------------
//! Write a function to see if a triangle is a right triangle based off
//! whether or not square of the longest side is equal to the sum of the squares of the other sides.

// function pythag(a, b ,c) {
//     if ((a*a) + (b*b) === (c*c)){
//         console.log("right tirangle")
//     } else{
//         console.log("not right tirangle")
//     }
    
// }

const pythag = (a,b,c) => ((a*a) + (b*b) === (c*c)) ? console.log("right") : console.log("not right")

pythag(2,2,4)
pythag(2,2,3)
pythag(1,2,3)
pythag(2,2,4)

// -----------------------------------------------------------------
//! Write a function to check to see if a warrior can beat all of the monsters in a dungeon.
//! Supply the function with the amount of damage each of the monsters do (in array format) and
//! then the number of health the warrior has.
//!   - If the warrior doesn't have enough health to take all of the attacks they are unable to survive
//!   - If they are able to take all of the attacks, they are able to survive.

//? Example of monster damage:
//? [1, 3, 2, 8, 5];
//? Warrior health:
//? 10;
//? Since 1+3+2+8+5 = 19 and 10-19 < 0 they could not survive
// if else
// loop to add damage
// funciton itself

let a1 = [1, 3, 9, 10, 17]
let a2 = [1, 5, 1, 1, 1,]

// function health(damage, hp){
//     let totalDmg = 0;
//     for(let i = 0; i < damage.length; i++){
//         totalDmg = totalDmg + damage[i]
//         if(damage >= hp){
//             console.log("die")
//         }
//         else{
//             console.log("survive")
//         }
//     }
// }

// let totalDmg = damage.reduce((acc, val) => acc + val, 0)

function health2(damage, hp){
    if((damage.reduce((acc, val) => acc + val, 0)) >= hp){
        console.log("die")
    }
    else{
        console.log("survive")
    }
}

// health2(a1, 10)
// health2(a2, 10)

// -----------------------------------------------------------------
//! BONUS:
//! Use recursion for function 2

//! EXTRA BONUS:
// -----------------------------------------------------------------
//! Write a function that contains a function scope variable named counter with a starting value of 0.
//! - The function should return a closure that when called will increment the counter variable by 1
//!   and log it to the console.
//! - Assign the function to a variable named counterLog to be able to test it.
