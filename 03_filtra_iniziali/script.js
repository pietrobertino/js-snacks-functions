/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function getWordsByInitial(arr, letter) {
    let wordsByInitial = [];
    for (const word of arr) {
        if (word[0] === letter) {
            wordsByInitial.push(word);
        }
    }
    return wordsByInitial;
}


// Invoca la funzione qui e stampa il risultato in console

const initial = "A";

console.log(getWordsByInitial(names,initial));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]