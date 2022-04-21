//Ask the user for odd or even and for a number from 1 to 5, generate a random number from 1 to 5 for the PC, estabilish if the sum is odd or even and declarate who won.
//Given
const userOddOrEven = prompt("Scegli tra pari e dispari");
console.log(userOddOrEven);
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);
//Elaboration


// DONE facciamo scegliere all'utente pari o dispari

// DONE l'utente inserisce un numero

// DONE facciamo generare un numero random alla cpu

// controlliamo se il numero random sommato al numero dell'utente sia pari o dispari


function generateNumber() {
    return Math.floor(Math.random() * 5) + 1;
}


const numberRandom = generateNumber();
console.log(numberRandom);

function winner(value, num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    let winner = false;
    if (sum % 2 === 0 && value == "pari") {
        winner = true;
    }

    if (sum % 2 === 1 && value == "dispari") {
        winner = true;
    }

    return winner;
}


const result = winner(userOddOrEven, userNumber, numberRandom);

if (result) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}