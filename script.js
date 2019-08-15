const textElement1 = document.querySelector('.header__wellcome-text1');
const textElement2 = document.querySelector('.header__wellcome-text2');
const text1 = 'Welcome on my page. '
const text2 = 'Feel comfortable. :-)'

let reset = false
let licznik = 0;
const cur = document.querySelector('.header__cursor')

function addLeter() {



    if (reset === false && licznik < text1.length) {
        textElement1.textContent += text1.charAt(licznik++);
    } else if (reset === false) {
        licznik = 0;
        reset = true;
    }


    if (reset === true && licznik < text2.length) {


        textElement2.textContent += text2.charAt(licznik++);
    }


    if (licznik == text2.length) {

        clearInterval(indexInterval);
    }

}

const indexInterval = setInterval(addLeter, 400);
let licznik2 = 0;

function cursorBlink() {

    if (licznik2 % 2 === 1) {
        cur.textContent = '|';
    } else {
        cur.textContent = '';
    }
    licznik2++;

}

setInterval(cursorBlink, 400);