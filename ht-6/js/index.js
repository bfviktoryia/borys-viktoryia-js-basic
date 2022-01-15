//  Task 1
// С помощью вложенных циклов, нарисуйте строку:
// ***_***_***_
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

const $OUT1 = document.querySelector(".out1");
temp = " ";

for (k = 0; k < 3; k++){
    temp += "_";   
    for (i = 1; i <= 3; i++){
        temp += "*";
    }
        }
$OUT1.textContent = temp;

//  Task 2
// С помощью вложенных циклов, нарисуйте строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
//Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.

const $OUT2 = document.querySelector(".out2");
temp2= " ";

for (k = 1; k <= 3; k++){   
    temp2 += `${k}<br>`;
    for (i = 0; i < 3; i++){
        temp2 += "*_";
    }
    temp2 += `<br>`;
        }
$OUT2.innerHTML = temp2;

//  Task 3
// С помощью вложенных циклов, нарисуйте строку:
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.

const $OUT3 = document.querySelector(".out3");
temp3= " ";

for (k = 0; k < 4; k++){
    
    for (i = 1; i <= 3; i++){

        temp3 += `*_`;
    }
    temp3 += `<br>`;
        }
$OUT3.innerHTML = temp3;

//  Task 7
// *
// **
// ***
// ****
// Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.


const $OUT4 = document.querySelector(".out4");
let temp4 = " ";

for (i = 1; i <= 4; i++){

for(k = 0; k < i ; k++ ){
    temp4 += "*";
}
    temp4 += `<br>`;
}

$OUT4.innerHTML = temp4;

// Task 8
//Создайте массив arr8 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn8
// Вывод в out8
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

const $BTN8 = document.querySelector(".btn8");
const $OUT8 = document.querySelector(".out8");

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function f8(){
    sum = 0;

    for (i = 0; i < arr8.length; i++){
    sum = arr8[0] + arr8[2] + arr8[3];
    }
    $OUT8.textContent = sum;
}
$BTN8.addEventListener("click", f8)


// const $BTN8 = document.querySelector(".btn8");
// const $OUT8 = document.querySelector(".out8");

// let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function f8(){
//     $OUT8.innerHTML = arr8[8];
// }
// $BTN8.addEventListener("click", f8)

// Task 9
//Создайте массив arr9, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div9. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn9
// Вывод в out9

let arr9 = ["Вика", "стрелец", "12"]
const $DIV9 = document.querySelector(".div9");

// for (i = 0; i < arr9.length; i++){
//     $DIV9.innerHTML += `${arr9[i]} `;
// }

for (let item of arr9)
$DIV9.innerHTML += `${item} `;


// Task 10
// Выведите последний элемент массива arr10. Вывод последнего элемента  - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn10
// Вывод в out10

let arr10 = [100, 200, 300, 400, 700, 121];

const $BTN10 = document.querySelector(".btn10");
const $OUT10 = document.querySelector(".out10");

function f10(){
    $OUT10.innerHTML = arr10[arr10.length - 1];
}
$BTN10.addEventListener("click", f10);

// Task 11
// Выведите массив arr11 в out11 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn11
// Вывод в out11
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3

let arr11 = ["one", "two", "three", "four", "five"];

const $BTN11 = document.querySelector(".btn11");
const $OUT11 = document.querySelector(".out11");

function f11(){
    let out = "";
    for (i = 0; i < arr11.length; i++){
        out += `${i} ${arr11[i]} `;
    }
    $OUT11.innerHTML = out;
 
}
$BTN11.addEventListener("click", f11);

// Task 12
// Используя цикл выведите в .out12 количество элементов arr12, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn12
// Вывод в out12

let arr12 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

const $BTN12 = document.querySelector(".btn12");
const $OUT12 = document.querySelector(".out12");

function f12(){
    let sum = 0;
    for (i = 0; i < arr12.length; i++){

     if (arr12[i] > 3){
        sum = sum + 1;
     }
    }
    $OUT12.textContent = sum;

   }
$BTN12.addEventListener("click", f12);

// Task 13
// Выведите в .out13 сумму элементов в массиве arr13
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn13
// Вывод в out13

let arr13 = [4, 5, 6, 7, 8, 9, 10];

const $BTN13 = document.querySelector(".btn13");
const $OUT13 = document.querySelector(".out13");

function f13(){
    let sum = "";
    for (i = 0; i < arr13.length; i++){
        for (k = 0; k < arr13[i]; k++)
        sum++;
    }
    $OUT13.textContent = sum;
   }
$BTN13.addEventListener("click", f13);

// Task 14
/*  Дан массив arr14= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте массив arr14_res куда добавьте элементы данного массива возведенные во вторую степень. Возвратите массив arr14_res. Действия должны запускаться при вызове функции f14.*/

let arr14 = [2, 3, 4, 5, 10, 11, 12];

const $DIV14 = document.querySelector(".div14")

function f14(){
let arr14_res = arr14.map((item, index, arr14)=>{
    return  Math.pow(item, 2);
})
$DIV14.innerHTML = arr14_res;
}
f14();

// Task 15
/*  Функция f15 должна с помощью filter отфильтровать массив f15 и создать новый массив arr15_res, куда добавить только числа из массива f15.  Функция должна возвращать arr15_res. */

let arr15 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
const $DIV15 = document.querySelector(".div15")

function f15(){
    let newArr15 = arr15.filter(function(item, index, arr15){
        if (typeof item === "number"){
            return item;
        
    }});
    $DIV15.innerHTML = newArr15;
    }
f15();

// Task 16
/*  Дан массив arr16 = ['Quantum Break', 'Gears of War 4', 'Mass Effect: Andromeda', 'Far Cry Primal']. С помощью forEach, переберите массив a9 и преобразуйте все записи в массиве в нижний регистр. Действия должны запускаться при вызове функции f16. Функция должна возвращать arr16. */

let arr16 = [
    "Quantum Break",
    "Gears of War 4",
    "Mass Effect: Andromeda",
    "Far Cry Primal",
  ];
  const $DIV16 = document.querySelector(".div16")

function f16(){

  arr16.forEach(function (item, i){
     arr16[i] = item.toLowerCase();  
})
$DIV16.innerHTML = arr16;
}
f16();

// Task 17
/*  Дан массив arr17 = [2, 13, 14, -7, 9, 5, 0, -2, 14]. С помощью метода includes функция f17 должна определить, есть ли значение из переменной arr17_num в массиве. Если да - то функция возврaщает true, если нет false.*/
const $DIV17 = document.querySelector(".div17")

let arr17 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
function f17 (){
let arr17_num = arr17.includes(28, 0)
$DIV17.innerHTML = arr17_num;
}
f17();