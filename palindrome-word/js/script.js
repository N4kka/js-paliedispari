//Ask the user a word and create a function to understand if it is a palindrome word
//Given
const userWord = prompt("Scrivi una parola a tuo piacere");
console.log(userWord);

//Elaboration
palindromeWord();

function palindromeWord() {
    //Split the word choosen letter by letter
    userWordSplitted = userWord.split('');
    //Revert the single letters 
    userWordReverse = userWordSplitted.reverse('');
    //Join the single letters reverted
    userWordUnion = userWordReverse.join('');

    //Comparing the word choosen and the word reverted to estabilish if the word is palindrome or not
    if (userWord === userWordUnion) {
        console.log("The word you have choosen is palindrome");
    } else {
        console.log("The word you have choosen isn't palindrome");
    }
}