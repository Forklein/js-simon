console.log('Ciao Peppe!');

/* Descrizione:
Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
(Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri
il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati
(Bonus: stampare in pagina il risultato, in alternativa all'alert.) */


//! Function random number Max included
var cpuList = [];
var userNumber = [];

while (cpuList.length < 5) {
    var cpuNumber = randomNumber(20, 1);
    if (!cpuList.includes(cpuNumber)) {
        cpuList.push(cpuNumber)
    }
}
console.log(cpuList);

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
