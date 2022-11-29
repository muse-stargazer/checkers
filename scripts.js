//code for checkers game

function freshBoard () {
  [...document.getElementsByClassName('dark piece')].forEach(div => div.classList.add('red'));
  [...document.getElementsByClassName('dark piece2')].forEach(div => div.classList.add('black'));
}

