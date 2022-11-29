//code for checkers game

document.getElementById("newGameButton").onclick = function() {freshBoard()};

function freshBoard () {
  if (element.classList.contains("piece")) {
    element.classList.add("red");
    element.classList.remove("piece");
  }
  if (element.classList.contains("piece2")) {
    element.classList.add("black");
    element.classList.remove("piece2");
  }
}

