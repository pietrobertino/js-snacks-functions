/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = prompt("Inserisci il tuo nome");


// Dichiara la funzione qui.

const logGreeting = nome => {
    let message = `Ciao ${nome}`;
    return message;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(logGreeting(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario
