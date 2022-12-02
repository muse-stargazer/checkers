//code for checkers game

//null all global variables here
var redPieces = null;
var blackPieces = null;
var chooseCount = null;
var darkSpaces = null;

//function to apply freshBoard to all newGame class --not currently working, so have function in html--------------------
//[...document.getElementsByClassName('newGame')].onclick = freshBoard;

//attached to #newGameButton currently, should eventually be attached to .newGame 
function freshBoard() {
  [...document.getElementsByClassName('piece')].forEach(div => div.classList.add('red')); //makes pieces populate at correct starting positions, marked by blank piece classes
  [...document.getElementsByClassName('piece2')].forEach(div => div.classList.add('black'));
  [...document.getElementsByClassName('blank')].forEach(div => div.classList.remove('red', 'black', 'choose')); //clears middle rows so only correct number of pieces show

  redPieces = document.getElementsByClassName('red'); //collection of red pieces
  blackPieces = document.getElementsByClassName('black'); //collection of black pieces
  darkSpaces = document.getElementsByClassName('dark'); //collection of all dark spaces (moveable spots)
  
  [...darkSpaces].forEach(div => div.classList.remove('choose'));

  //add visual selector to space 
  [...darkSpaces].forEach(div => div.addEventListener('click', function() {
    this.classList.toggle('choose');
    //set up counter for chosen pieces
    chooseCount = document.getElementsByClassName('choose'); //collection of selected spaces
    //copy for black class once working---------------------------------------------------------------
    if (chooseCount.length == 2) {
      if (chooseCount[0].classList.contains('red') && !chooseCount[1].classList.contains('red', 'black')) {
        chooseCount[0].classList.remove('red', 'choose');
        chooseCount[1].classList.add('red');
        chooseCount[1].classList.remove('choose');
      }
      else if (chooseCount[0].classList.contains('black') && !chooseCount[1].classList.contains('black', 'red')) {
        chooseCount[0].classList.remove('black', 'choose');
        chooseCount[1].classList.add('black');
        chooseCount[1].classList.remove('choose');
    }} 
    if (chooseCount.length >= 3) {
      darkSpaces.classList.remove('choose');
    }
   }));



  redCount = redPieces.length; //number of red pieces left
  blackCount = blackPieces.length; //number of black pieces left




}