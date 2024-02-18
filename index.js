const gameBoard = document.querySelector(".gameboard");
const resultScreen = document.querySelector(".result");
const btn_playAgain = document.querySelector("#playagain");

let turn = 0;
function makeBoard() {
  return (board = []);
}

function clearBoard() {
  gameBoard.childNodes.forEach((node) => {
    node.innerHTML = "";
  });
}

function toggleResultScreen() {
  if (resultScreen.style.display == "") {
    resultScreen.style.display = "flex";
  } else {
    resultScreen.style.display = "";
  }
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
    toggleResultScreen();
  }
}

for (let i = 0; i < gameBoard.childNodes.length; i++) {
  let node = gameBoard.childNodes[i];
  node.addEventListener("click", (e) => {
    updateGameBoard(1, 1, i);
  });
}

function playAgain() {
  clearBoard();
  toggleResultScreen();
  turn = 0;
}
