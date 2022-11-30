//code for checkers game

//function to apply freshBoard to all newGame class --not currently working, so have function in html
//[...document.getElementsByClassName('newGame')].onclick = freshBoard;

//attached to #newGameButton currently, should eventually be attached to .newGame
//makes pieces populate at correct starting positions, marked by blank piece classes
function freshBoard() {
  [...document.getElementsByClassName('piece')].forEach(div => div.classList.add('red'));
  [...document.getElementsByClassName('piece2')].forEach(div => div.classList.add('black'));
}

redPieces = document.getElementsByClassName('red'); //collection of red pieces

blackPieces = document.getElementsByClassName('black'); //collection of black pieces

//trying to add visual selector to space when piece is selected
redPieces.forEach(div => {
  div.addEventListener('click', select => {
    classList.add('choose');
  })
});