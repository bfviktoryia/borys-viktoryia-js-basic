let btn = document.querySelectorAll('.accordeon__title');
let cont_item = document.querySelectorAll('.accordeon-content__item');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    btn[i].classList.toggle('active');

    for (let k = 0; k < cont_item.length; k++) {
      cont_item[i].classList.toggle('active');
    }
  });
}
