// Task 1. 
let userName = "Vika";
console.log (userName)

// Task 2. 
let dateNumber = 2;
let dateMonth = 12;
let dateYear = 1989;
console.log (dateNumber)
console.log (dateMonth)
console.log (dateYear)
let myBirthday = `${dateNumber}.${dateMonth}.${dateYear}`;
console.log (myBirthday);

// Task 3. 
let str = "Добро пожаловать в мир Java Script";
console.log (str);

// Task 4. 

// Task 5. 

// Task 6. 
let div6 = document.querySelector('#task6');
div6.innerHTML = '<p>Мой первый вывод на страницу</p>';

// Task 7. 
let result = (12 * 12);
let div7 = document.getElementById("task7");
div7.innerHTML = result;

// Task 8. 
let div8 = document.querySelector('.task8');
div8.innerHTML = "<p>Вывод элемента по классу</p>";

// Task 9. 
let span9 = document.querySelector("span");
span9.textContent = "world";

// Task 10. 
let div10 = document.querySelector(".task10");
div10.innerHTML = 3.1415;

// Task 11. 
let div11 = document.querySelector(".task11");
div11.innerHTML = '<img src="https://golos.ua/images/items/2020-08/02/CxJ6myL6cfYB26Mn/img_top.jpg" alt="">';

// Task 12. 
let z1 = 6;
let z2 = 3;
let result12 = (z1 * z2);
let div12 = document.querySelector(".task12");
div12.innerHTML = result12;

// Task 13. 
let y1 = 6;
let y2 = 3;
let result13 = (y1 / y2);
let div13 = document.querySelector(".task13");
div13.innerHTML = result13;

// Task 14. 
let x1 = "Hello";
let x2 = 5;
let result14 = (x1 +x2);
let div14 = document.querySelector(".task14");
div14.innerHTML = result14;

// Task 15. Напишите рядом с каждым выражением , тот ответ который по вашему мнению выведет console.
// И потом сравните ваш результат с тем что на самом деле вывела консоль.
// 1// Infinity - "1" 
// 4242// "42" + 42 
// 21 1// 2 + "1 1" 
// 200// 99 + 101
// 1// "1" - "1"
// Result: 5// "Result: " + 10/2
// 3 bananas 2 apples // 3 + " bananas " + 2 + " apples "

let a1 = Infinity;
let a2 = "1";
let result1 = (Infinity - "1");
console.log(result1)
// console.log(typeof a1);

let b1 = "42";
let b2 = 42;
let result2 = (b1 + b2);
console.log(result2);
console.log(Number(result2));

let c1 = 2;
let c2 = "1 1";
let result3 = (c1 + c2);
console.log(result3);

let d1 = 99;
let d2 = 101;
let result4 = (d1 + d2);
console.log(result4);

let e1 = "1";
let e2 = "1";
let result5 = (e1 - e2);
console.log(result5);
// console.log(typeof e1);

let f1 = "Result: ";
let f2 = (10 / 2);
let result6 = (f1 + f2);
console.log(result6);

let g1 = 3;
let g2 = " bananas ";
let g3 = 2;
let g4 = " apples ";
let result7 = (g1 + g2 + g3 + g4);
console.log(result7);