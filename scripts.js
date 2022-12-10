//code for checkers game

//null all global variables here
var redPieces = null;
var blackPieces = null;
var chooseCount = null;
var darkSpaces = document.getElementsByClassName('dark'); //collection of all dark spaces (moveable spots)
var chosenSpace = null;
var redCount = null;
var blackCount = null;

//attached to new game button
function freshBoard() {
  [...document.getElementsByClassName('piece')].forEach(div => div.classList.add('red')); //makes pieces populate at correct starting positions, marked by blank piece classes
  [...document.getElementsByClassName('piece')].forEach(div => div.classList.remove('black', 'crown'));
  [...document.getElementsByClassName('piece2')].forEach(div => div.classList.add('black'));
  [...document.getElementsByClassName('piece2')].forEach(div => div.classList.remove('red', 'crown'));
  [...document.getElementsByClassName('blank')].forEach(div => div.classList.remove('red', 'black', 'choose', 'crown')); //clears middle rows so only correct number of pieces show

  redPieces = document.getElementsByClassName('red'); //collection of red pieces
  blackPieces = document.getElementsByClassName('black'); //collection of black pieces

  [...darkSpaces].forEach(div => div.classList.remove('choose')); //clear all selections on New Game
} //end of freshBoard

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
  } else {
    //we have selected a piece already

    if (this.classList.contains('red') || this.classList.contains('black')) {
      //there is a piece on second space, invalid move
      chosenSpace.classList.remove('choose');
      return;
    }

    //we clicked a dark space with a piece on it, and second space with no piece: valid move -if within proximity-
    var chosenWasRed = chosenSpace.classList.contains('red'); //piece we chose was red
    var chosenWasCrown = chosenSpace.classList.contains('crown'); //piece we chose has crown  

    //where are we coming fromCol
    const fromRow = Number(chosenSpace.dataset.row);
    const fromCol = Number(chosenSpace.dataset.col);

    //where are we moving to
    const toRow = Number(this.dataset.row);
    const toCol = Number(this.dataset.col);

    //red pieces move up row numbers (down the board)
    var moveDirection = chosenWasRed ? 1 : -1;
    if (toRow !== fromRow + moveDirection || (toCol !== fromCol + 1 && toCol !== fromCol - 1)) {
      //make an exception for skips
      if (toRow === fromRow + (2 * moveDirection) &&
        toCol === fromCol + 2
      ) {
        //skip piece
        const eat = document.querySelector('[data-row="' + (fromRow + moveDirection) + '"][data-col="' + (fromCol + 1) + '"].' + (chosenWasRed ? 'black' : 'red'))
        if (!eat) {
          //illegal move, nothing to skip
          return;
        }
        eat.classList.remove(chosenWasRed ? 'black' : 'red');

      } else if (toRow === fromRow + (2 * moveDirection) &&
        toCol === fromCol - 2
      ) {
        //skip piece
        const eat = document.querySelector('[data-row="' + (fromRow + moveDirection) + '"][data-col="' + (fromCol - 1) + '"].' + (chosenWasRed ? 'black' : 'red'))
        if (!eat) {
          //illegal move, nothing to skip
          return;
        }
        eat.classList.remove(chosenWasRed ? 'black' : 'red');

      } else {
        return;
      }
    } //end of first click was piece



    this.classList.add(chosenWasRed ? 'red' : 'black'); //if the piece was red, make new space red; if not, make new space black



    if (chosenWasCrown) {
      this.classList.add('crown');
      chosenSpace.classList.remove('crown'); //ensure crown class moves with piece
    }
    chosenSpace.classList.remove('choose'); //remove choose class 
    chosenSpace.classList.remove(chosenWasRed ? 'red' : 'black'); //remove piece from original position


    //add crown classes
    [...document.getElementsByClassName('red rowH')].forEach(div => div.classList.add('crown'));
    [...document.getElementsByClassName('black rowA')].forEach(div => div.classList.add('crown'));


    //if a piece was jumped, run function 'jump'




    redCount = redPieces.length; //number of red pieces left
    blackCount = blackPieces.length; //number of black pieces left

    //when redCount=0, Black wins and vice versa
    if (redCount === 0) {
      alert('Black Wins!');
    }
    if (blackCount === 0) {
      alert('Red Wins!');
    }

  }
})) //end of select function on dark spaces


freshBoard();