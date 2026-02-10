/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

const getInitials = arr => {
    let initials = [];
    for (const word of arr) {
        let initial = word[0];
        initials.push(initial);
    }
    return initials;
}



// Invoca la funzione qui e stampa il risultato in console

const names_initials = getInitials(names);
console.log(names_initials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]