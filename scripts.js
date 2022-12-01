//code for checkers game

//null all global variables here
var redPieces = null;
var blackPieces = null;

//function to apply freshBoard to all newGame class --not currently working, so have function in html--------------------
//[...document.getElementsByClassName('newGame')].onclick = freshBoard;

//attached to #newGameButton currently, should eventually be attached to .newGame 
function freshBoard() {
  [...document.getElementsByClassName('piece')].forEach(div => div.classList.add('red')); //makes pieces populate at correct starting positions, marked by blank piece classes
  [...document.getElementsByClassName('piece2')].forEach(div => div.classList.add('black'));
  [...document.getElementsByClassName('blank')].forEach(div => div.classList.remove('red', 'black')); //clears middle rows so only correct number of pieces show

  redPieces = document.getElementsByClassName('red'); //collection of red pieces
  blackPieces = document.getElementsByClassName('black'); //collection of black pieces

  //add visual selector to space when red piece is selected 
  [...redPieces].forEach(div => div.addEventListener('click', function () {
    this.classList.toggle('choose');
    //once function is complete copy it for black pieces -----------------------------------
  }));

  
  
  redCount = redPieces.length; //number of red pieces left
  blackCount = blackPieces.length; //number of black pieces left
  
  //set up counter for chosen pieces
  chooseCount = document.querySelectorAll('choose'); //collection of selected spaces
  
  function spaceCount(what) {
    if (!what.classList.contains('choose')) {
      
    }
  }


}