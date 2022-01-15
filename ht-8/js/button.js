const $BTN = document.querySelector('.block-btn');
const $CONTENT = document.querySelector('.block-content');

function showBlock() {
  $BTN.classList.toggle('coral');
  $BTN.classList.toggle('active');
  $CONTENT.classList.toggle('active');

  if ($BTN.innerHTML == 'hide block') {
    $BTN.innerHTML = 'open block';
  } else {
    $BTN.innerHTML = 'hide block';
  }
}
$BTN.addEventListener('click', showBlock);
