// 1 Игральный автомат. За сколько проходов автомат собирет нужное число, если в слот будет выпадать число от 0 до 10. Надо наброать 100 баллов.
// 1+7+4+9+..........+2 = 101

function randomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let sum = 0;
let counter = 0;
function namberRecursion(n) {
  let integer = randomInt(0, 10);
  console.log('Выпало: ' + integer);
  sum += integer;
  console.log('Накопило: ' + sum);
  if (sum >= n) return;
  counter++;
  console.log(counter);
  namberRecursion(100);
}
namberRecursion();
