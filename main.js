// Tik Tak Toe
// Author: Farnaz Towhidi

const state = {
  board: [],
  player: "X",
  playerClickedPos: [],
  winner: "",
};

const ElBoard = document.getElementById("board");
const ElCells = document.querySelectorAll(".cell");
const ElBtn = document.querySelector("input");

ElBtn.addEventListener("click", resetGame);
ElBoard.addEventListener("click", function (e) {
  // step 1, update the board
  if (!e.target.textContent) {
    e.target.textContent = state.player;

    // step 2: update the player Array
    ElCells.forEach((cells, index) => {
      cells.textContent == state.player
        ? (state.playerClickedPos[index] = 1)
        : (state.playerClickedPos[index] = 0);
    });

    checkWin(state.playerClickedPos);
    switchPlayer();
  }
});

function checkWin(inputArr) {
  let winFlag = false;

  if (
    (inputArr[0] && inputArr[0] == inputArr[1] && inputArr[0] == inputArr[2]) ||
    (inputArr[3] && inputArr[3] == inputArr[4] && inputArr[3] == inputArr[5]) ||
    (inputArr[6] && inputArr[6] == inputArr[7] && inputArr[6] == inputArr[8]) ||
    (inputArr[0] && inputArr[0] == inputArr[3] && inputArr[0] == inputArr[6]) ||
    (inputArr[1] && inputArr[1] == inputArr[4] && inputArr[1] == inputArr[7]) ||
    (inputArr[2] && inputArr[2] == inputArr[5] && inputArr[2] == inputArr[8]) ||
    (inputArr[0] && inputArr[0] == inputArr[4] && inputArr[0] == inputArr[8]) ||
    (inputArr[2] && inputArr[2] == inputArr[4] && inputArr[2] == inputArr[6])
  )
    winFlag = true;
  if (winFlag == true)
    document.querySelector(".winner").textContent =
      "The winner is " + state.player;
}

function switchPlayer() {
  state.player === "X" ? (state.player = "O") : (state.player = "X");
}

function resetGame() {
  ElCells.forEach((cells, index) => {
    cells.textContent = "";
    document.querySelector(".winner").textContent = "";
    state.player = "X";
  });
}
