//code for checkers game

function freshBoard () {
  [...document.getElementsByClassName('piece')].forEach(div => div.classList.add('red'));
  [...document.getElementsByClassName('piece2')].forEach(div => div.classList.add('black'));
}

[...document.getElementsByClassName('red')].forEach(div => div.addEventListener("click", select));

function select () {
  document.getElementsByClassName('red').style.border= '2px black';
}