// // Task 1
// // При нажатии btn1 запустите функцию f1. Функция должна вывести в out1 значение сохраненное под ключем two из obj1.
let obj1 = {
    one: 8,
    two: 12,
    tree: 38,
  };

const $OUT_1 = document.querySelector(".out-1")
const $BTN_1 = document.querySelector(".btn-1")

  function f1(){
    $OUT_1.textContent = obj1.two;
  }
  $BTN_1.addEventListener("click", f1) 

// Task 2
// При нажатии btn2 выполняете функцию f2. Функция должна вывести в out2 значение "06" из объекта obj2.
let obj2 = {
    year: "1983",
    month: "08",
    day: "06",
  };

const $OUT_2 = document.querySelector(".out-2")
const $BTN_2 = document.querySelector(".btn-2")

function f2(){
$OUT_2.textContent = obj2.day;
}  
$BTN_2.addEventListener("click", f2) 

// Task 3
// Все функции привязаны к конкретным объектами. Это не удобно. Давайте напишем функцию f3, которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).
// function f3(arr, out) {
//   let out = ""; .............
// .............
// .............
let obj = {
    a: "раз",
    b: "два",
}
const $BLOCK = document.querySelector(".block")

function f3 (obj, out) {
    let temp = " ";
for (let key in obj){
   temp += `${key}: ${obj[key]} <br>`;
}
out.innerHTML = temp;

}
f3(obj ,$BLOCK);

// let obj = {
//     a: "раз",
//     b: "два",
// }
// const $BLOCK = document.querySelector(".block")

// function f3 (obj, out) {
//     let temp = " ";
// for (let key in obj){
//    temp += `${key}: ${obj[key]} <br>`;
// }
// $BLOCK.innerHTML = temp;

// }
// f3(obj ,$BLOCK);

// // Task 4
// // При нажатии btn4 выполняете функцию f4. Функция должна в out4 выводить сумму значений объекта obj4 (только числа). Для перебора используйте f4.
let obj4 = {
    lorem: "JS",
    ipsum: "HTML",
    dolor: 8,
    sit: "CSS",
    amet: 15,
  };

  const $OUT_4 = document.querySelector(".out-4")
  const $BTN_4 = document.querySelector(".btn-4")

function f4(){
    let num = 0;

for (let key in obj4){

if (typeof obj4[key] === "number")
{
num += obj4[key];
}
}
$OUT_4.textContent = num;
}

$BTN_4.addEventListener("click", f4);

// // Task 5
// // Добавьте input .i5. При нажатии btn5 выполняете функцию f5. Функция должна вывести в out5 все ключи  obj5, которые содержат значение, равное значению в input.i5. Вывод через пробел. Если значений - нет - то выводить пустую строку "такого числа нет".

let obj5 = {
    a: 33,
    b: 18,
    c: 33,
    d: 18,
    e: 86,
  };

  const $OUT_5 = document.querySelector(".out-5")
  const $BTN_5 = document.querySelector(".btn-5")

  function f5(){
      let i5 = +document.querySelector(".i5").value;
      let temp = "";

for (let key in obj5){
if (obj5[key] === i5) {

   temp += `${key} `;
}
// else {
//     temp = "такого числа нет"
// } 
}
$OUT_5.textContent = temp;

  }
$BTN_5.addEventListener("click", f5);

// Task 6
// input .i6-1 и i6-2. При нажатии btn6 выполняете функцию f6. Функция должна получать из i6-1 ключ, а из i6-2 значение и добавлять его в obj6. После этого, с помощью функции f3 выводите массив a6 в out-6.

let obj6 = {
    old: 88,
    young: 22,
  };

 const $BTN_6 = document.querySelector(".btn-6")
 const $OUT_6 = document.querySelector(".out6")

function f6(){
    let i6_1 = document.querySelector(".i6-1").value;
    let i6_2 = document.querySelector(".i6-2").value;
    obj6[i6_1] = i6_2;
    f3(obj6, $OUT_6);
    }
$BTN_6.onclick = f6;


// Task 7
//  При нажатии btn7 выполняете функцию f7. Функция должна получить значение из i7 и удалить запись из массива obj7 с таким значением. После этого вывести массив в out7. Для вывода используйте функцию f3.

let obj7 = {
    lorem: "JS",
    ipsum: "HTML",
    dolor: 8,
    sit: "CSS",
    amet: 15,
  };

 const $BTN_7 = document.querySelector(".btn-7")
 const $OUT_7 = document.querySelector(".out-7")

 function f7(){
     let i7 = document.querySelector(".i-7").value;
     for (let key in obj7){
         if (i7 == obj7[key]){
           delete obj7[key]  
         }
     }
     f3(obj7, $OUT_7)
 }
 $BTN_7.addEventListener("click", f7)


