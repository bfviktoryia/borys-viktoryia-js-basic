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