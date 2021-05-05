// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


function randomBombe (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var diff = Number(prompt("Inserisci un livello tra 0, 1 e 2"));
var listaBombe = [];
var bomba;
var numeroMassimo;

if (diff == 0){
    numeroMassimo = 100;
} else if (diff == 1) {
    numeroMassimo = 80;
} else if (diff == 2) {
    numeroMassimo = 50;
}

var possibilità = numeroMassimo - 16;

while (listaBombe.length < 16) {
    bomba = randomBombe(1, numeroMassimo);

    if(!listaBombe.includes(bomba)) 
    listaBombe.push(bomba);
}

console.log(listaBombe);

var punteggio = 0;
var lista = [];
var possibilita = numeroMassimo - 16;

do {
    var userNumb = Number(prompt("Inserisci numero"));
    
    if (listaBombe.includes(userNumb)){
        alert("Hai perso!");
    } else if (lista.includes(userNumb)) {
        alert ("Numero già inserito!");
    } else if (userNumb < 1 || userNumb > numeroMassimo) {
        alert ("Numero non consentito!");
    } else {
        lista.push(userNumb);
        punteggio = punteggio + 1;
    }    
} while(lista.length <= possibilita && !listaBombe.includes(userNumb));

console.log(lista);
console.log(punteggio);

if (lista.length == possibilita) {
    alert("Hai vinto!");
}