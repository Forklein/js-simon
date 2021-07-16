console.log('Ciao Peppe!');

/* Descrizione:
Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
(Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri
il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati
(Bonus: stampare in pagina il risultato, in alternativa all'alert.) */



const cpuList = [];
const userList = [];
const equalList = [];

const resultDisplay = document.getElementById('result');
const timerDisplay = document.getElementById('box-timer');
const pointDisplay = document.getElementById('point');

let timer = 30;
resultDisplay.innerText = timer;

while (cpuList.length < 5) {
    const cpuNumber = randomNumber(50, 1);
    if (!cpuList.includes(cpuNumber)) {
        cpuList.push(cpuNumber);
    }
}
console.log(cpuList);
alert('Il computer ha generato i seguenti numeri ' + '\n' + cpuList + '\n' + 'Ricordali per 30 secondi');

//? Variable for stop interval
const stop = setInterval(my_timer, 1000);
timerDisplay.classList.remove('d-none');

//! Function Timer

function my_timer() {
    timer--;
    resultDisplay.innerText = timer;
    if (timer === -1) {
        clearInterval(stop);
        timerDisplay.classList.add('d-none');
        game();
    }
}

function game() {
    let userNumber;
    do {
        userNumber = parseInt(prompt('Inserisci 5 numeri uno alla volta (da 1 a 50):'));
        if (!userList.includes(userNumber) && userNumber <= 50) {
            userList.push(userNumber);
            console.log(userList)
            if (cpuList.includes(userNumber)) {
                equalList.push(userNumber);
            }
        } else {
            alert('Non fare il furbo!');
        }
    } while (!userNumber || userList.length < 5);
    if (equalList.length === 0) {
        alert('Non hai indovinato nessun numero!');
        pointDisplay.innerText = 'Non hai indovinato nessun numero!'
    } else {
        alert('Il tuo punteggio è di ' + equalList.length + ' su 5!');
        pointDisplay.innerText = 'Il tuo punteggio è di ' + equalList.length + ' su 5!';
    }
}

//! Function random number Max included
function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}