const div_gameBoard = document.querySelector(".gameboard");
const resultScreen = document.querySelector(".result");
const btn_playAgain = document.querySelector("#playagain");
const txt_winner = document.querySelector(".winner");

function makeBoard() {
  let fields = ["", "", "", "", "", "", "", "", ""];
  let player1 = makePlayer("Alex", "X");
  let player2 = makePlayer("Adam", "O");

  let turn = 0;
  let winner = null;

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
    if (turn != 8 && winner == null) {
      player = getPlayerTurn();
      if (fields[pos] == "") {
        fields[pos] = player.getMarker();
        document.getElementById(pos).innerText = player.getMarker();
        return true;
      }
      return false;
    } else {
      toggleResultScreen();
    }
  }

  function checkWinner() {
    let marker = getPlayerTurn().getMarker();

    for (let i = 0; i < 9; i++) {
      // check for wins in rows
      if (i % 3 == 0) {
        if (fields[i] == marker && fields[i + 1] == marker) {
          if (fields[i + 2] == marker) {
            winner = getPlayerTurn();
            return winner;
          }
        }
      }
      // check for wins in columns
      if (i < 3) {
        if (fields[i] == marker && fields[i + 3] == marker) {
          if (fields[i + 6] == marker) {
            winner = getPlayerTurn();
            return winner;
          }
        }
      }
      // check for wins in diagonals
      if (i == 0 || i == 2) {
        if (i == 0) {
          if (fields[i] == marker && fields[i + 4] == marker) {
            if (fields[i + 8] == marker) {
              winner = getPlayerTurn();
              return winner;
            }
          }
        } else {
          if (fields[i] == marker && fields[i + 2] == marker) {
            if (fields[i + 4] == marker) {
              winner = getPlayerTurn();
              return winner;
            }
          }
        }
      }
    }
  }

  function incrementTurn() {
    turn++;
  }

  function resetTurn() {
    turn = 0;
  }

  function resetBoard() {
    fields = ["", "", "", "", "", "", "", "", ""];
    winner = null;
  }

  function getWinningPlayer() {
    if (winner == null) {
      return "Draw";
    } else {
      return winner.name + " has won";
    }
  }

  return {
    playTurn,
    resetTurn,
    checkWinner,
    incrementTurn,
    getWinningPlayer,
    turn,
    resetBoard,
  };
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
    txt_winner.innerText = gameBoard.getWinningPlayer();
  } else {
    resultScreen.style.display = "";
  }
}

function playAgain() {
  clearBoard();
  gameBoard.resetTurn();
  gameBoard.resetBoard();
  toggleResultScreen();
}

let gameBoard = makeBoard();

for (let i = 0; i < div_gameBoard.childNodes.length; i++) {
  let node = div_gameBoard.childNodes[i];
  node.addEventListener("click", (e) => {
    if (gameBoard.playTurn(node.id)) {
      if (gameBoard.checkWinner() != null) {
        toggleResultScreen();
      } else {
        gameBoard.incrementTurn();
      }
    }
  });
}
