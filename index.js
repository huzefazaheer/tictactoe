const div_gameBoard = document.querySelector(".gameboard");
const resultScreen = document.querySelector(".result");
const btn_playAgain = document.querySelector("#playagain");

function makeBoard() {
  let fields = ["", "", "", "", "", "", "", "", ""];
  let player1 = makePlayer("Huzefa", "X");
  let player2 = makePlayer("Ibrahim", "O");

  let turn = 0;

  function getPlayerTurn() {
    let player;
    if (turn % 2 == 0) {
      player = player1;
    } else {
      player = player2;
    }
    return player;
  }

  function playTurn(pos) {
    if (turn != 8) {
      player = getPlayerTurn();
      fields[pos] = player.getMarker();
      document.getElementById(pos).innerText = player.getMarker();
      checkWinner(pos);
    } else {
      toggleResultScreen();
    }

    incrementTurn();
  }

  function checkWinner(pos) {
    let marker = getPlayerTurn().getMarker();
    console.log(pos, marker);
    if (fields[pos + 1] == marker && fields[pos + 2] == marker) {
      console.log(marker + " has won");
    }
  }

  function incrementTurn() {
    turn++;
  }

  function resetTurn() {
    turn = 0;
  }

  return { playTurn, resetTurn, checkWinner };
}

function makePlayer(name, marker) {
  let winCount = 0;

  function getMarker() {
    return marker;
  }

  return { name, winCount, getMarker };
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
  gameBoard.resetTurn();
}

let gameBoard = makeBoard();

// function updatediv_GameBoard(posX, posY, divNumber) {
//   let div = div_gameBoard.childNodes[divNumber];
//   if (div.innerHTML == "") {
//     let getMarker() = "x";
//     console.log(turn % 2);
//     if (turn % 2 == 0) {
//       getMarker() = "X";
//     } else {
//       getMarker() = "O";
//     }
//     turn++;
//     div.innerText = getMarker();
//   }
//   if (turn == 9) {
//     toggleResultScreen();
//   }
// }

for (let i = 0; i < div_gameBoard.childNodes.length; i++) {
  let node = div_gameBoard.childNodes[i];
  node.addEventListener("click", (e) => {
    gameBoard.playTurn(node.id);
  });
}
