//code for checkers game

document.getElementsByClassName("newGame").onclick = function() {freshBoard()};

function freshBoard () {
  if (div.classList.contains("piece")) {
    div.classList.add("red");
  }
  if (div.classList.contains("piece2")) {
    div.classList.add("black");
  }
}