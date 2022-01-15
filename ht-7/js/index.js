// Task 0 // call, bind, apply

// Task 1
// Создайте 3 кнопки. Привяжите к каждой кнопке событие по клику, которое будет считать количество нажатий по кнопке и выводить его в текст кнопки. Количество нажатий для каждой кнопки должно хранится в замыкании. При вызове функции используем контекст this.
// <button class='btn-1'>0</button>
// <button class='btn-1'>0</button>
// <button class='btn-1'>0</button>

const $BTN = document.querySelectorAll(".btn-1");  

function f1($BTN){
    let a = 0;
   return () => {
    $BTN.textContent = a;
    a++;
      return a;
    }
};

for (let i = 0; i < $BTN.length; i++) {
    let button = $BTN[i];
    button.addEventListener("click", f1(button))
}


// let a = 0;
// $BTN[0].addEventListener("click", function (){
//     this.textContent = a;
//     a++
// })


// Task 2
// Дан массив цветов. Даны абзацы. По первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее. Все абзацы работают независимо.
// let colors = ['yellow', 'coral', 'purple', 'blue', 'red'];
// <span class='span-2'>item 1</span>
// <span class='span-2'>item 2</span>
// <span class='span-2'>item 3</span>

let colors = ['yellow', 'coral', 'purple', 'blue', 'red'];
let $SPAN = document.querySelectorAll(".span-2");

function setColor($SPAN){
    let i = 0;
return () => {
    let color = colors[i];
    $SPAN.style.background = color;
    i++;
    if (i === colors.length) {
i = 0
// или прерываем и начинаем сначала так: return 
    }
}}
for (let j = 0; j < $SPAN.length; j++){
    let span = $SPAN[j];
    span.onclick = setColor(span);
    }

// $SPAN.style.background = color;
// let bgcolor = getColor();
// $SPAN.addEventListener("click", bgcolor());

// Task 3
// Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.
// <button class='btn-3'>PRESS</button>
// <span class='span-3'></span>

const $BTN3 = document.querySelector(".btn-3");
const $SPAN3 = document.querySelector(".span-3");

function randomNumber (min, max){
// создание пустого массива
    let number = []; 
    return function () {
    let random = Math.floor(min + Math.random() * (max + 1 - min));
    for (i = 0; i < number.length; i++) {
        if (number[i] == random) {
        return;
    }
}
$SPAN3.innerHTML += random + ", "
// заполнение пустого массива
number.push(random);
    }
}
    
$BTN3.addEventListener("click", randomNumber(1, 100));

