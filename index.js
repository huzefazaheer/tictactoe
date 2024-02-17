const gameBoard = document.querySelector(".gameboard");

let turn = 0;
function updateGameBoard(posX, posY, divNumber) {
  let div = gameBoard.childNodes[divNumber];
  if (div.innerHTML == "") {
    let marker = "X";
    console.log(turn % 2);
    if (turn % 2 == 0) {
      marker = "X";
    } else {
      marker = "O";
    }
    turn++;
    div.innerText = marker;
  }
}

for (let i = 0; i < gameBoard.childNodes.length; i++) {
  let node = gameBoard.childNodes[i];
  node.addEventListener("click", (e) => {
    updateGameBoard(1, 1, i);
  });
}
