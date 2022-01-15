const $TITLE = document.querySelector(".accordeon-title");
const $CONTENT_ITEM = document.querySelectorAll(".accordeon-content__item");

function changeClass(el){
    for (i = 0; i < $TITLE.children.length; i++){
    $TITLE.children[i].classList.remove("active");
}
    el.classList.add("active"); 
    // элемент на котором event target
}
$TITLE.addEventListener("click", (event) => {
    let currentTitle = event.target.dataset.title;
    // dataset - получение дата элемента на который нацелено событие по нажатию
    console.log(currentTitle)
    changeClass(event.target);
    // вызываем функцию изменнения классов и атрибуту (el) задаем значениtцели, на которую нажали

$CONTENT_ITEM.forEach((item) => {
    item.classList.remove("active");
    // перебор элементов через метод forEach (вместо стандартного цикла for)
    if (item.dataset.content === currentTitle)
    // в переменной currentTitle уже передан dataset.title
    {
    item.classList.add("active");
    }
  });
});


// 1 Игральный автомат. За сколько проходов автомат собирет нужное число, если в слот будет выпадать число от 0 до 10. Надо наброать 100 баллов.
// 1+7+4+9+..........+2 = 101

// function randomInt(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }
// let sum = 0;
// function namberRecursion(n) {
//   let integer = randomInt(0, 10);
//   console.log("Выпало: " + integer);
//   sum += integer;
//   console.log("Накопило: " + sum);
//   if (sum >= n) return;
//   namberRecursion(100);
// }
// namberRecursion();
// let count = 0;
//     for (i = 0; i < namberRecursion.length; i++){
//             count += namberRecursion[i];
//             console.log(count);

//         }













