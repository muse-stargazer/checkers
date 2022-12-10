//code for checkers game

//null all global variables here
var redPieces = null;
var blackPieces = null;
var chooseCount = null;
var darkSpaces = null;
var chosenSpace = null;
var chosenWasRed = null;
var redCount = null;
var blackCount = null;

//function to apply freshBoard to all newGame class --not currently working, so have function in html--------------------
//[...document.getElementsByClassName('newGame')].onclick = freshBoard;

//attached to #newGameButton currently, should eventually be attached to .newGame 
function freshBoard() {
  [...document.getElementsByClassName('piece')].forEach(div => div.classList.add('red')); //makes pieces populate at correct starting positions, marked by blank piece classes
  [...document.getElementsByClassName('piece')].forEach(div => div.classList.remove('black'));
  [...document.getElementsByClassName('piece2')].forEach(div => div.classList.add('black'));
  [...document.getElementsByClassName('piece2')].forEach(div => div.classList.remove('red'));
  [...document.getElementsByClassName('blank')].forEach(div => div.classList.remove('red', 'black', 'choose')); //clears middle rows so only correct number of pieces show

  redPieces = document.getElementsByClassName('red'); //collection of red pieces
  blackPieces = document.getElementsByClassName('black'); //collection of black pieces
  darkSpaces = document.getElementsByClassName('dark'); //collection of all dark spaces (moveable spots)

  [...darkSpaces].forEach(div => div.classList.remove('choose')); //clear all selections on New Game

  //add visual selector to space 
  [...darkSpaces].forEach(div => div.addEventListener('click', function select() {

    chosenSpace = document.querySelector('.choose');
    //if we haven't selected a space yet
    if (!chosenSpace) {
      if (!this.classList.contains('red') && !this.classList.contains('black')) {
        //if the space we select is empty, do nothing
        return;
      }
      //the space has a piece, add .choose
      this.classList.add('choose');
    } else { //we have selected a piece already
      if (this.classList.contains('red') || this.classList.contains('black')) {
        //there is a piece on second space, invalid move
        chosenSpace.classList.remove('choose');
        return;
      }
      
      //mark legal moves by row class --one row at a time for now-------
          //red pieces with no crown
       if (chosenSpace.classList.contains('rowA') && !this.classList.contains('rowB rowC')) {
        return;
      }
      if (chosenSpace.classList.contains('red rowB') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowC rowD')) {
        return;
      }
      if (chosenSpace.classList.contains('red rowC') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowD rowE')) {
        return;
      }
      if (chosenSpace.classList.contains('red rowD') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowE rowF')) {
        return;
      }if (chosenSpace.classList.contains('red rowE') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowF rowG')) {
        return;
      }
      if (chosenSpace.classList.contains('red rowF') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowG rowH')) {
        return;
      }
      if (chosenSpace.classList.contains('red rowG') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowH')) {
        return;
      }
      
          //black pieces with no crown
      if (chosenSpace.classList.contains('rowH') && !this.classList.contains('rowG rowF')) {
        return;
      }
      if (chosenSpace.classList.contains('black rowG') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowF rowE')) {
        return;
      }
      if (chosenSpace.classList.contains('black rowF') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowE rowD')) {
        return;
      }
      if (chosenSpace.classList.contains('black rowE') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowD rowC')) {
        return;
      }
      if (chosenSpace.classList.contains('black rowD') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowC rowB')) {
        return;
      }
      if (chosenSpace.classList.contains('black rowC') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowB rowA')) {
        return;
      }
      if (chosenSpace.classList.contains('black rowB') && !chosenSpace.classList.contains('crown') && !this.classList.contains('rowA')) {
        return;
      }
      
          //all pieces with crown
      if (chosenSpace.classList.contains('rowB crown') && !chosenSpace.classList.contains('rowA rowC rowD')) {
        return;
      }
      if (chosenSpace.classList.contains('rowC crown') && !chosenSpace.classList.contains('rowA rowB rowD rowE')) {
        return;
      }
      if (chosenSpace.classList.contains('rowD crown') && !chosenSpace.classList.contains('rowB rowC rowE rowF')) {
        return;
      }
      if (chosenSpace.classList.contains('rowE crown') && !chosenSpace.classList.contains('rowC rowD rowF rowG')) {
        return;
      }
      if (chosenSpace.classList.contains('rowF crown') && !chosenSpace.classList.contains('rowD rowE rowG rowH')) {
        return;
      }
      if (chosenSpace.classList.contains('rowG crown') && !chosenSpace.classList.contains('rowE rowF rowH')) {
        return;
      }

      //we clicked a dark space with a piece on it, and second space with no piece: valid move -if within proximity-
      chosenWasRed = chosenSpace.classList.contains('red'); //piece we chose was red
      this.classList.add(chosenWasRed ? 'red' : 'black'); //if the piece was red, make new space red; if not, make new space black
      chosenWasCrown = chosenSpace.classList.contains('crown'); //piece we chose has crown
      if (chosenWasCrown) {
        this.classList.add('crown');
        chosenSpace.classList.remove('crown');//ensure crown class moves with piece
      }
      chosenSpace.classList.remove('choose'); //remove choose class 
      chosenSpace.classList.remove(chosenWasRed ? 'red' : 'black'); //remove piece from original position
      
     
      


    } //end of first click was piece

    //add crown classes
    [...document.getElementsByClassName('red rowH')].forEach(div => div.classList.add('crown'));
    [...document.getElementsByClassName('black rowA')].forEach(div => div.classList.add('crown'));

    //if a piece was jumped, run function 'jump'

    redCount = redPieces.length; //number of red pieces left
    blackCount = blackPieces.length; //number of black pieces left

    //when redCount=0, Black wins and vice versa
    if (redCount == 0) {
      alert('Black Wins!');
    }
    if (blackCount == 0) {
      alert('Red Wins!');
    }

  })) //end of select function on dark spaces
} //end of freshBoard