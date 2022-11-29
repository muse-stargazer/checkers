//code for checkers game

document.getElementsByClassName("newGame").onclick = function() {freshBoard()};

function freshBoard () {
  [...document.getElementsByClassName('piece')].forEach(div => classList.add('red'));
  [...document.getElementsByClassName('piece2')].forEach(div => classList.add('black'));
}

