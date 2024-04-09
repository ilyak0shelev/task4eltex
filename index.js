const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-_$~';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const digits = '0123456789';
const exceptions = 'CPSX';

let arr = []
let N, N2, N3;
let lettersCounter = 0;
let digitsCounter = 0;
let unchangedCounter = 0;

const startBtnClickHandler = () => {
    N = prompt('Введите число');

    while (isNaN(Number(N)) || N === '' || N == ' ') {
        N = prompt('Введите корректное значение!');
    }

    for (let i = 0; i < N; i++) {
        let symbol = chars[Math.floor(Math.random() * chars.length)];

        while (exceptions.indexOf(symbol) != -1) {
            symbol = chars[Math.floor(Math.random() * chars.length)];
        }

        arr.push(symbol);
    }

    const stringForPrint = arr.join('');
    const changedString = document.createElement('div');
    changedString.textContent = `${stringForPrint}`;
    cont.append(changedString);

    startBtn.style.display = 'none';
    lettersBtn.style.display = 'block';
}

const lettersBtnClickHandler = () => {
    N2 = prompt('Введите символ');
    
    while (N2.length > 1 || N2 === '' || N2 === ' ') {
        N2 = prompt('Введите корректное значение!');
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (letters.indexOf(arr[i]) != -1) {
            arr[i] = N2;
        }
    }
    
    const stringForPrint = arr.join('');
    const changedString = document.createElement('div');
    changedString.textContent = `${stringForPrint}`;
    cont.append(changedString);

    lettersBtn.style.display = 'none';
    digitsBtn.style.display = 'block';
}

const digitsBtnClickHandler = () => {
    N3 = prompt('Введите символ');
    
    while (N3.length > 1 || N3 === '' || N3 === ' ') {
        N3 = prompt('Введите корректное значение!');
    }

    for (let i = 0; i < arr.length; i++) {
        if (digits.indexOf(arr[i]) != -1) {
            arr[i] = N3;
        }
    }
    
    const stringForPrint = arr.join('');
    const changedString = document.createElement('div');
    changedString.textContent = `${stringForPrint}`;
    cont.append(changedString);

    digitsBtn.style.display = 'none';

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case `${N2}`:
                lettersCounter++;
                break;
            case `${N3}`:
                digitsCounter++;
                break;
            default:
                unchangedCounter++;
                break;
        }
    }

    const counters = document.createElement('div');
    counters.textContent = `Повторы символа ${N2}: ${lettersCounter};
                            Повторы символа ${N3}: ${digitsCounter};
                            Кол-во неизменённых символов: ${unchangedCounter}`;
    cont.append(counters);
}

const cont = document.querySelector('#container');

const startBtn = document.querySelector("#start_task");
const lettersBtn = document.querySelector("#start_second");
const digitsBtn = document.querySelector("#start_third");

startBtn.addEventListener('click', startBtnClickHandler);
lettersBtn.addEventListener('click', lettersBtnClickHandler);
digitsBtn.addEventListener('click', digitsBtnClickHandler)