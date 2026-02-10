/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const countVowels = str => {
    const vowels = ["a", "e", "i", "o", "u"];
    str = str.toLowerCase();
    result = 0;
    for (const letter of str) {
        for (const vowel of vowels) {
            if (letter === vowel) {
                result++; 
                break;
            }
        }
    }
    return result;
}


// Invoca la funzione qui e stampa il risultato in console
const vowel_number = countVowels(word);
console.log(vowel_number);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)