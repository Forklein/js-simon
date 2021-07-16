console.log('Ciao Peppe!');

/* Descrizione:
Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
(Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri
il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati
(Bonus: stampare in pagina il risultato, in alternativa all'alert.) */



var cpuList = [];
var userList = [];
var equalList = [];
var resultDisplay = document.getElementById('result');
var boxDisplay = document.getElementById('box');

var timer = 5;
resultDisplay.innerText = timer;

while (cpuList.length < 5) {
    var cpuNumber = randomNumber(20, 1);
    if (!cpuList.includes(cpuNumber)) {
        cpuList.push(cpuNumber);
    }
}
console.log(cpuList);
alert('Il computer ha generato i seguenti numeri ' + '\n' + cpuList + '\n' + 'Ricordali per 30 secondi');

//? Variable for stop interval
var stop = setInterval(my_timer, 1000);
boxDisplay.classList.remove('d-none');

//! Function Timer

function my_timer() {
    timer--;
    resultDisplay.innerText = timer;
    if (timer === -1) {
        clearInterval(stop);
        boxDisplay.classList.add('d-none');
        game();
    }
}

function game() {
    var userNumber;
    do {
        var userNumber = parseInt(prompt('Inserisci i numeri uno alla volta:'));
        if (!userList.includes(userNumber)) {
            userList.push(userNumber);
            if (cpuList.includes(userNumber)) {
                equalList.push(userNumber);
            }
        }
    } while (!userNumber || userList.length < 5);
    if (equalList.length === 0) {
        alert('Non hai indovinato nessun numero!');
    } else {
        alert('Complimenti hai indovinato ' + equalList.length + ' su 5!');
    }
}



//! Function random number Max included
function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}