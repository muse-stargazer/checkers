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
.red.rowH classList.add('crown')
.black.rowA classList.add('crown)