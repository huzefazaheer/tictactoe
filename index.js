const div_gameBoard = document.querySelector(".gameboard");
const resultScreen = document.querySelector(".result");
const btn_playAgain = document.querySelector("#playagain");

function makeBoard() {
  let fields = ["", "", "", "", "", "", "", "", ""];
  let player1 = makePlayer("Huzefa", "X");
  let player2 = makePlayer("Ibrahim", "O");

  let turn = 0;

  function getTurn() {
    let player;
    if (turn % 2 == 0) {
      player = player1;
    } else {
      player = player2;
    }
    turn++;
    return player;
  }

  function playTurn(pos) {
    player = getTurn();
    fields[pos] = player.marker;
    console.log(fields);
    document.getElementById(pos).innerText = player.marker;
  }

  return { playTurn };
}

function makePlayer(name, marker) {
  let winCount = 0;
  return { name, marker, winCount };
}

function clearBoard() {
  div_gameBoard.childNodes.forEach((node) => {
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

function playAgain() {
  clearBoard();
  toggleResultScreen();
  turn = 0;
}

let gameBoard = makeBoard();

// function updatediv_GameBoard(posX, posY, divNumber) {
//   let div = div_gameBoard.childNodes[divNumber];
//   if (div.innerHTML == "") {
//     let marker = "x";
//     console.log(turn % 2);
//     if (turn % 2 == 0) {
//       marker = "X";
//     } else {
//       marker = "O";
//     }
//     turn++;
//     div.innerText = marker;
//   }
//   if (turn == 9) {
//     toggleResultScreen();
//   }
// }

for (let i = 0; i < div_gameBoard.childNodes.length; i++) {
  let node = div_gameBoard.childNodes[i];
  node.addEventListener("click", (e) => {
    // updatediv_GameBoard(1, 1, i);
    gameBoard.playTurn(node.id);
  });
}
