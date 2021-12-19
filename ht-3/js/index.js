// Task 1
// Кнопка btn-1 запускает функцию f1. Функция должна выводить в res-1 строку вида:
// 30 31 32 33 ... 80 включительно. Разделитель - пробел.

const $BTN_1 = document.querySelector(".btn-1");
const $RES_1 = document.querySelector(".res-1");

function f1() {
    let temp = "";
    for (i = 30; i <= 80; i++) {
        temp += i + " ";
    }  
    $RES_1.textContent = temp;
}
$BTN_1.onclick = f1;

// Task 2
// Кнопка btn-2 запускает функцию f2. Функция должна выводить в res-2 строку вида:
// 50 49 48 47 ... 30 включительно c шагом 1. Разделитель - пробел.

const $BTN_2 = document.querySelector(".btn-2");
const $RES_2 = document.querySelector(".res-2");

function f2() {
    let temp = "";
    for (k = 50; k >= 30; --k){
        temp += k + " ";
    }
    $RES_2.textContent = temp;
}
$BTN_2.onclick = f2;

// Task 3
// Кнопка btn-3 запускает функцию f3. Функция должна выводить в res-3 строку вида:
// 99-95-91-87- ... 30 c шагом 4. Разделитель - знак тире.

const $BTN_3 = document.querySelector(".btn-3");
const $RES_3 = document.querySelector(".res-3");

function f3 () {
    let temp = "";
    for (let a = 99; a >= 30; a = a - 4)  
    { if(a === 31)
        temp += a +"-30";
        else
        temp += a + "-";}   

    $RES_3.textContent = temp;
}
$BTN_3.onclick = f3;


// Task 4
// Кнопка btn-4 запускает функцию f4. Функция должна выводить в res-4 строку вида:
// 1-x2-xx3-x4-xx ... 17-x c шагом 1. Разделитель - знак тире, и "x" если число нечетное и "xx", если число четное.

const $BTN_4 = document.querySelector(".btn-4");
const $RES_4 = document.querySelector(".res-4");

function f4() {
    let temp = "";
    for (b = 1; b <= 17; b++){
        if (b % 2 !== 0)
    temp += b + "-x";
        else 
    temp += b + "-xx";
}
$RES_4.textContent = temp; 
}
$BTN_4.onclick = f4;

// Task 5
// Есть input i-5 и i-6 куда пользователь может ввести числа.
// По нажатию кнопки btn-5 должна запускаться функция f5, которая выводит в res-5 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 3 и 9  и нажал кнопку, мы получим:
// 3 4 5 6 7 8 9
// если ввел 9 и 5, то получим:
// 5 6 7 8 9
// Вначале делаем проверку if и в ней запускаем цикл. Цикл используем один.


const $BTN_5 = document.querySelector(".btn-5");
const $RES_5 = document.querySelector(".res-5");

function f5 (){
    let temp = "";    
    let i5 = document.querySelector(".i-5").value;
    let i6 = document.querySelector(".i-6").value;
    console.log(typeof i6)

      if (i5 < i6) {
          for (let j = i5; j <= i6; j++)
          temp += j + " ";
      } else if (i5 > i6) {
          for (let x = i6; x <= i5; x++)
          temp += x + " ";
      }
    
$RES_5.textContent = temp;
}
$BTN_5.onclick = f5;

// Task 6
// Создать 3 дива с классом item-6
// <div class="item-6">item</div>
// <div class="item-6">item</div>
// <div class="item-6">item</div>
// Кнопка btn-6 запускает функцию f6.  Функция должна:
// получить все item-6
// перебрать их с помощью цикла. Обращение к item делаем так - elem[i]
// применить к каждому elem[i].style.background = ‘yellow’. Изучить синтаксис и возможности добавления стилей при помощи JS.
// Так как div не является числом и имеет один класс, их колличество в цикле можно определить при помощи свойства length (... i < elem.length ...)

const $BTN_6 = document.querySelector(".btn-6");

function f6() {
    let elem = document.querySelectorAll(".item-6");

    for (i = 0; i < elem.length; i++) {
        elem[i].style.background = 'yellow';
    }
}
$BTN_6.onclick = f6;


//  Task 7
// Есть input i-7 и i-7-1 куда пользователь может ввести числа больше нуля.
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки btn-7  должна запускаться функция foo7, которая выводит в out-7 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 12  и нажал кнопку, мы получим:
//     4 5 6 7 8 9 10 11 12

const $BTN_7 = document.querySelector(".btn-7");
const $OUT_7 = document.querySelector(".out-7");


function foo7() {
    let temp = " ";
    let i7 = document.querySelector(".i-7").value;
    let i7i = document.querySelector(".i-7-i").value;

    for (i = i7; i <= i7i && i > 0 && i7i > 0; i++){
        temp += i + " ";
    }
    $OUT_7.textContent = temp;
}
$BTN_7.onclick = foo7;

