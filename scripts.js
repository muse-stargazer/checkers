//code for checkers game

//null all global variables here
var redPieces = null;
var blackPieces = null;
var chooseCount = null;
var darkSpaces = document.getElementsByClassName('dark'); //collection of all dark spaces (moveable spots)
var chosenSpace = null;
var redCount = null;
var blackCount = null;
var turn = 'red';

//attached to new game button
function freshBoard() {
  [...document.getElementsByClassName('piece')].forEach(div => div.classList.add('red')); //pieces populate at correct starting positions, marked by blank piece classes
  [...document.getElementsByClassName('piece')].forEach(div => div.classList.remove('black', 'crown'));
  [...document.getElementsByClassName('piece2')].forEach(div => div.classList.add('black'));
  [...document.getElementsByClassName('piece2')].forEach(div => div.classList.remove('red', 'crown'));
  [...document.getElementsByClassName('blank')].forEach(div => div.classList.remove('red', 'black', 'choose', 'crown')); //clears middle rows so only correct number of pieces show

  turn = 'red'; //turn defaults to red
  redPieces = document.getElementsByClassName('red'); //collection of red pieces
  blackPieces = document.getElementsByClassName('black'); //collection of black pieces

  [...darkSpaces].forEach(div => div.classList.remove('choose')); //clear all selections on New Game

} //end of freshBoard

// returns a space by row/col coordinates
function getSpace(row, col) {
  return document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
}

/**
 * isLegalMove takes a startSpace (which contains a red or black piece) and an endSpace
 * It returns:
 *   false if the move is illegal
 *.  true if the move is legal, and does not "eat" a piece
 *.  the skipped space (truthy) if the move is a legal jump/eat
 */
function isLegalMove(startSpace, endSpace) {
  var isRed = startSpace.classList.contains('red');
  var isBlack = !isRed;
  var isKing = startSpace.classList.contains('crown'); //checks whether startSpace has red, black or crown classes

  //is there a piece at endspace
  if (endSpace.classList.contains('red') || endSpace.classList.contains('black')) {
    return false;
  }

  //where are we coming from
  const fromRow = Number(startSpace.dataset.row);
  const fromCol = Number(startSpace.dataset.col);

  //where are we moving to
  const toRow = Number(endSpace.dataset.row);
  const toCol = Number(endSpace.dataset.col);

  var canMoveUp = isRed || isKing;
  var canMoveDown = isBlack || isKing;

  //legal single row move up - left or right
  if (canMoveUp && toRow === fromRow + 1 && (toCol === fromCol + 1 || toCol === fromCol - 1)) {
    return true;
  }

  //legal single row move down - left or right
  if (canMoveDown && toRow === fromRow - 1 && (toCol === fromCol + 1 || toCol === fromCol - 1)) {
    return true;
  }

  //legal jump (two rows) up to the left - and check for next jump
  if (canMoveUp && toRow === fromRow + 2 && toCol === fromCol - 2) {
    let jumpedSpace = getSpace(fromRow + 1, fromCol - 1)
    if (jumpedSpace.classList.contains(isRed ? 'black' : 'red')) {
      return jumpedSpace;
    }
    let nextJumpL = getSpace(fromRow + 3, fromCol - 3);
    let nextMoveL = getSpace(fromRow + 4, fromCol - 4);
    let nextJumpR = getSpace(fromRow + 3, fromCol - 1);
    let nextMoveR = getSpace(fromRow + 4, fromCol + 0);
    if (nextJumpL.classList.contains(isRed ? 'black' : 'red') &&
      !nextMoveL.classList.contains('black') &&
      !nextMoveL.classList.contains('red')) {
      endSpace.classList.remove(isRed ? 'red' : 'black');
      jumpedSpace.classList.remove(isRed ? 'black' : 'red');
      nextMoveL.classList.add(isRed ? 'red' : 'black');
      return nextJumpL;
    } else if (nextJumpR.classList.contains(isRed ? 'black' : 'red') &&
      !nextMoveR.classList.contains('black') &&
      !nextMoveR.classList.contains('red')) {
      endSpace.classList.remove(isRed ? 'red' : 'black');
      jumpedSpace.classList.remove(isRed ? 'black' : 'red');
      nextMoveL.classList.add(isRed ? 'red' : 'black');
      return nextJumpR;
    }
  }

  //legal jump (two rows) up to the right - and check for next jump
  if (canMoveUp && toRow === fromRow + 2 && toCol === fromCol + 2) {
    let jumpedSpace = getSpace(fromRow + 1, fromCol + 1);
    if (jumpedSpace.classList.contains(isRed ? 'black' : 'red')) {
      return jumpedSpace;
    }
    let nextJumpL = getSpace(fromRow + 3, fromCol + 1);
    let nextMoveL = getSpace(fromRow + 4, fromCol + 0);
    let nextJumpR = getSpace(fromRow + 3, fromCol + 3);
    let nextMoveR = getSpace(fromRow + 4, fromCol + 4);
    if (nextJumpL.classList.contains(isRed ? 'black' : 'red') &&
      !nextMoveL.classList.contains('black') &&
      !nextMoveL.classList.contains('red')) {
      endSpace.classList.remove(isRed ? 'red' : 'black');
      jumpedSpace.classList.remove(isRed ? 'black' : 'red');
      nextMoveL.classList.add(isRed ? 'red' : 'black');
      return nextJumpL;
    } else if (nextJumpR.classList.contains(isRed ? 'black' : 'red') &&
      !nextMoveR.classList.contains('black') &&
      !nextMoveR.classList.contains('red')) {
      endSpace.classList.remove(isRed ? 'red' : 'black');
      jumpedSpace.classList.remove(isRed ? 'black' : 'red');
      nextMoveL.classList.add(isRed ? 'red' : 'black');
      return nextJumpR;
    }

  }

  //legal jump (two rows) down to the left - and check for next jump
  if (canMoveDown && toRow === fromRow - 2 && toCol === fromCol - 2) {
    let jumpedSpace = getSpace(fromRow - 1, fromCol - 1);
    if (jumpedSpace.classList.contains(isRed ? 'black' : 'red')) {
      return jumpedSpace;
    }
    let nextJumpL = getSpace(fromRow - 3, fromCol - 3);
    let nextMoveL = getSpace(fromRow - 4, fromCol - 4);
    let nextJumpR = getSpace(fromRow - 3, fromCol - 1);
    let nextMoveR = getSpace(fromRow - 4, fromCol + 0);
    if (nextJumpL.classList.contains(isRed ? 'black' : 'red') &&
      !nextMoveL.classList.contains('black') &&
      !nextMoveL.classList.contains('red')) {
      endSpace.classList.remove(isRed ? 'red' : 'black');
      jumpedSpace.classList.remove(isRed ? 'black' : 'red');
      nextMoveL.classList.add(isRed ? 'red' : 'black');
      return nextJumpL;
    } else if (nextJumpR.classList.contains(isRed ? 'black' : 'red') &&
      !nextMoveR.classList.contains('black') &&
      !nextMoveR.classList.contains('red')) {
      endSpace.classList.remove(isRed ? 'red' : 'black');
      jumpedSpace.classList.remove(isRed ? 'black' : 'red');
      nextMoveL.classList.add(isRed ? 'red' : 'black');
      return nextJumpR;
    }

  }

  //legal jump (two rows) down to the right - and check for next jump
  if (canMoveDown && toRow === fromRow - 2 && toCol === fromCol + 2) {
    let jumpedSpace = getSpace(fromRow - 1, fromCol + 1);
    if (jumpedSpace.classList.contains(isRed ? 'black' : 'red')) {
      return jumpedSpace;
    }
    let nextJumpL = getSpace(fromRow - 3, fromCol + 1);
    let nextMoveL = getSpace(fromRow - 4, fromCol + 0);
    let nextJumpR = getSpace(fromRow - 3, fromCol + 3);
    let nextMoveR = getSpace(fromRow - 4, fromCol + 4);
    if (nextJumpL.classList.contains(isRed ? 'black' : 'red') &&
      !nextMoveL.classList.contains('black') &&
      !nextMoveL.classList.contains('red')) {
      endSpace.classList.remove(isRed ? 'red' : 'black');
      jumpedSpace.classList.remove(isRed ? 'black' : 'red');
      nextMoveL.classList.add(isRed ? 'red' : 'black');
      return nextJumpL;
    } else if (nextJumpR.classList.contains(isRed ? 'black' : 'red') &&
      !nextMoveR.classList.contains('black') &&
      !nextMoveR.classList.contains('red')) {
      endSpace.classList.remove(isRed ? 'red' : 'black');
      jumpedSpace.classList.remove(isRed ? 'black' : 'red');
      nextMoveL.classList.add(isRed ? 'red' : 'black');
      return nextJumpR;
    }

  }

  return false;

} // end of isLegalMove


//add visual selector to space 
[...darkSpaces].forEach(div => div.addEventListener('click', function select() {

  chosenSpace = document.querySelector('.choose');

  //if we haven't selected a space yet
  if (!chosenSpace) {
    if (!this.classList.contains('red') && !this.classList.contains('black')) {
      //if the space we select is empty, do nothing
      return;
    }
    //if it's not their turn, do nothing
    if (!this.classList.contains(turn)) {
      return;
    }
    //the space has a piece, add .choose
    this.classList.add('choose');
  } else {
    //we have selected a piece already

    //we clicked a dark space with a piece on it, and second space with no piece: valid move -if within proximity-
    var chosenWasRed = chosenSpace.classList.contains('red'); //piece we chose was red
    var chosenWasCrown = chosenSpace.classList.contains('crown'); //piece we chose has crown  

    const isLegal = isLegalMove(chosenSpace, this);

    if (!isLegal) {
      // Illegal move
      chosenSpace.classList.remove('choose');
      return;
    }

    if (isLegal !== true) {
      isLegal.classList.remove('red', 'black');
    }

    this.classList.add(chosenWasRed ? 'red' : 'black'); //if the piece was red, make new space red; if not, make new space black

    if (chosenWasCrown) {
      this.classList.add('crown');
      chosenSpace.classList.remove('crown'); //ensure crown class moves with piece
    }
    chosenSpace.classList.remove('choose'); //remove choose class 
    chosenSpace.classList.remove(chosenWasRed ? 'red' : 'black'); //remove piece from original position

    //add crown classes upon a team reaching the other side
    [...document.getElementsByClassName('red rowH')].forEach(div => div.classList.add('crown'));
    [...document.getElementsByClassName('black rowA')].forEach(div => div.classList.add('crown'));

    redCount = redPieces.length; //number of red pieces left
    blackCount = blackPieces.length; //number of black pieces left

    //when redCount=0, Black wins and vice versa
    if (redCount === 0) {
      alert('Black Wins!');
    }
    if (blackCount === 0) {
      alert('Red Wins!');
    }

    turn = turn === 'red' ? 'black' : 'red';

    //make turn selector apparent 
    if (turn !== 'red') {
      document.getElementById('redTurn').style.display = 'none';
      document.getElementById('blackTurn').style.display = 'block';
    } else {
      document.getElementById('blackTurn').style.display = 'none';
      document.getElementById('redTurn').style.display = 'block';
    }

  } //end of already selected one piece
})) //end of select function on dark spaces

freshBoard();