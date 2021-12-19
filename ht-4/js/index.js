// Task 1
// Напишите функцию f1, которая принимает число и возвращает true, если число четное, и false если не четное.

function f1 (x) {
    //  if (x % 2 == 0){
    //      return true;
    //  }
    //  else {
    //      return false;
    //  }
    return x % 2 == 0;
}
console.log(f1(7));

// Task 2
// Создайте функцию f2, которая принимает 2 числа и возвращает большее из них. В случае равенства - любое из чисел.

function f2 (a, b) {
if (a > b) {
    return a;}
else if (b > a) {
return b;
}
else if (a = b) {
    return a || b;
}}
console.log(f2(150, 1));

// Task 3
// Создайте div.block Задайте ему ширину и высоту. По нажатию на кнопку btn-3 запустите функцию f3, которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255] и применяет его к div.block. Создайте две функции. Одна генерирует случайный цвет, вторая - применяет фоновый цвет к элементу.

const $BTN_3 = document.querySelector (".btn-3");
const $BLOCK = document.querySelector (".block");

function getColor (min, max) {
    let x = Math.floor(min + Math.random() * (max + 1 - min));
    let y = Math.floor(min + Math.random() * (max + 1 - min));
    let z = Math.floor(min + Math.random() * (max + 1 - min));
    let color = `rgb(${x}, ${y}, ${z})`;
    return color;
}
function setColor (){
    $BLOCK.style.background = getColor(0, 255);
}
$BTN_3.addEventListener("click", setColor);


    // Task 4
// Даны 2 input - i-41 и i-42, оба - input[type=number]. При нажатии кнопки btn-4 срабатывает функция f4. Функция должна получить содержимое i-41 и i-42 в переменные и сравнить их, вывести в  out-4 большее число.
//      Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

const $BTN_4 = document.querySelector(".btn-4");
const $OUT_4 = document.querySelector(".out-4");

function f4(){ 
    let i41 = +document.querySelector(".i-41").value;
    let i42 = +document.querySelector(".i-42").value;
    if (i41 >= i42){
        $OUT_4.textContent = `${i41}`;
}
    else if (i41 <= i42){
        $OUT_4.textContent = `${i42}`;
}
}
$BTN_4.addEventListener("click", f4);

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести год своего рождения. Есть кнопка btn-5 которая запускает функцию f5. Функция должна вывести в  .out-5 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

const $BTN_5 = document.querySelector(".btn-5");
const $OUT_5 = document.querySelector(".out-5");
function f5() {
    let year = 2021;
    let i5 = +document.querySelector(".i-5").value;
    if (year - i5 >= 18){
        $OUT_5.textContent = "1";
    }
    else if (year - i5 <= 18){
        $OUT_5.textContent = "0";
    }
}
    $BTN_5.addEventListener("click", f5);

// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка btn-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

const $BTN_6 = document.querySelector(".btn-6");
const $OUT_6 = document.querySelector(".out-6");

function f6(){
let i6 = +document.querySelector(".i-6").value;
if (i6 % 2 === 0){
    $OUT_6.textContent = "even";
}
else {
    $OUT_6.textContent = "odd";
}
}
$BTN_6.addEventListener("click", f6);

// Task 8
//     Создайте на странице input[type=number] с классом i-8, куда пользователь может ввести номер квартиры. Есть кнопка btn-8 которая запускает функцию f8. Функция должна вывести в  .out-8 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести "Такой квартиры нет в этом доме".
// const $BTN_8 = document.querySelector(".btn-8");
const $OUT_8 = document.querySelector(".out-8");

document.querySelector(".btn-8").addEventListener("click", function f8
(){
let i8 = +document.querySelector(".i-8").value;
if (i8 >= 1 && i8 <= 32){
    $OUT_8.textContent = "1";
}
else if (i8 >= 33 && i8 <= 43)
{
    $OUT_8.textContent = "2";
}
else if (i8 >= 44 && i8 <= 64)
{
    $OUT_8.textContent = "3";
}
else {
    $OUT_8.textContent = "Такой квартиры нет в этом доме";

}});

// Task 9
// Дан select s-9. По изменению состояния select (событие onchange) выведите value выбранного option в out-9. Внимание! Кнопка в данном задании не нужна.
//<select class="s-9">
//  <option value="1">one</option>
//  <option value="2">two</option>
//  <option value="3">tree</option>
//  <option value="4">four</option>
//</select>

const $SELECT_9 = document.querySelector(".s-9");
const $OUT_9 = document.querySelector(".out-9");
function f9() {
    $OUT_9.textContent = $SELECT_9.value;
}
$SELECT_9.onchange = f9;

//  Task 10
// Кнопка btn-10 запускает функцию f10  Функция должна:
//     получить все input.i-10
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-10 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
//<input type="radio" name="i-10" class="i-10" checked value="1">
//<input type="radio" name="i-10" class="i-10" value="2">
//<input type="radio" name="i-10" class="i-10" value="3">

const $BTN_10 = document.querySelector(".btn-10");
const $OUT_10 = document.querySelector(".out-10");
const $I_10 = document.querySelectorAll(".i-10");

function f10(){
    let elem = $I_10;
    
    for (i = 0; i <= elem.length; i++) {
        if (elem[i].checked){
        $OUT_10.textContent = elem[i].value;
    }  }
}
$BTN_10.onclick = f10;

//  Task 11
// Кнопка b-11 запускает функцию f11  Функция должна выводить следующую последовательность в out-11:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i

const $BTN_11 = document.querySelector(".b-11");
const $OUT_11 = document.querySelector(".out-11");
function f11() {
    let temp = "";
    for (i = 0; i <= 10; i++){
        temp += (10 - i) + " " + i;
    }
    $OUT_11.textContent = `${temp} `;
}
$BTN_11.onclick = f11;

//  Task 12
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
// Выведите на страницу

const $BTN_12 = document.querySelector(".b-12");
const $OUT_12 = document.querySelector(".out-12");

    function f12() {
        let temp12 = "";

        for (let i = 0; i < 3; i++) {

          for (let j = 0; j < 6; j++) {
            if (j % 2 === 0) {
              temp12 += "0";
            } else if (j % 2 !== 0){
              temp12 += "1";
            }
          }
          temp12 += "<br>";
          $OUT_12.innerHTML = temp12;
        }
      }
    $BTN_12.onclick = f12;

    //  Task 13
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
// Выведите на страницу


const $BTN_13 = document.querySelector(".b-13");
const $OUT_13 = document.querySelector(".out-13");


function f13() {
    temp13 = "";

    for (k = 0; k < 3; k++){

      for (x = 1; x <= 6; x++){
    if (x == 2 || x == 4){
        temp13 += "0";
    }
   
    else if (x % 3 === 0){
        temp13 += "x";
    }    
    else if (x % 2 !== 0) {
        temp13 += "1";
    } 
        }
        temp13 += "<br>";

    $OUT_13.innerHTML = temp13;
}}
$BTN_13.addEventListener("click", f13);

//  Task 14
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 5.</p>
// <p>Вложенный цикл рисует цифры от 1 до 10. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем ноль.</p>
// Выведите на страницу

const $BTN_14 = document.querySelector(".b-14");
const $OUT_14 = document.querySelector(".out-14");

function f14(){
    temp14 = "";
    num = 0;
    
    for (r = 0; r < 5; r++){
for (q = 1; q <= 10; q++){
    num++;

    if (num < 10){
    temp14 += `0${num} `;
}
    else {
        temp14 += `${num} `};
}

temp14 += "<br>";
    }
$OUT_14.innerHTML = temp14;
}
$BTN_14.onclick = f14;





