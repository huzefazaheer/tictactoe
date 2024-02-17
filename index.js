const gameBoard = document.querySelector(".gameboard");
const resultScreen = document.querySelector(".result");

let turn = 0;
function makeBoard() {
  return (board = []);
}

function updateGameBoard(posX, posY, divNumber) {
  let div = gameBoard.childNodes[divNumber];
  if (div.innerHTML == "") {
    let marker = "x";
    console.log(turn % 2);
    if (turn % 2 == 0) {
      marker = "X";
    } else {
      marker = "O";
    }
    turn++;
    div.innerText = marker;
  }
  if (turn == 9) {
    resultScreen.style.display = "flex";
  }
}

for (let i = 0; i < gameBoard.childNodes.length; i++) {
  let node = gameBoard.childNodes[i];
  node.addEventListener("click", (e) => {
    updateGameBoard(1, 1, i);
  });
}
