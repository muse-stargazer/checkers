# checkers
Local 2-player turn-based game of checkers
when clicking a piece, JS needs to check surrounding spaces for .red & .black
  if OP (original piece) is red, can move down grid
  if OP is black, can move up grid
if space in correct direction is same class, invalid move, return (already functioning by merit of not being able to choose two of your own pieces)
if space in correct direction is other class, need to perform jump function

Maybe the logic is that if your team is in that direction, stop looking, else if other team is in that direction, increase scope of move to two squares? 

.red.rowA can only move to .rowB, etc
.black.rowH can only move to .rowG, etc


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