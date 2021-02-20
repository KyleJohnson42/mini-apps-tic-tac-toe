let board = [[], [], []];
let currentTurn = 'X';
let gameWon = false;

let checkWin = board => {

};

let renderBoard = board => {
  for (const row in board) {
    for (const col in board[row]) {
      let id = row.toString() + col.toString();
      document.getElementById(id).innerHTML = board[row][col];
    }
  }
}

let renderWin = board => {

}

let handleClick = event => {
  if (event.target.innerHTML === '' && !gameWon){
    if (currentTurn === 'X') {
      let id = event.target.id;
      board[id[0]][id[1]] = 'X';
      currentTurn = 'O';
      renderBoard(board);
      checkWin(board);
    } else if (currentTurn === 'O') {
      let id = event.target.id;
      board[id[0]][id[1]] = 'O';
      currentTurn = 'X';
      renderBoard(board);
      checkWin(board, id);
    }
  }
};

let handleReset = event => {
  for (const row in board) {
    for (const col in board[row]) {
      board[row][col] = '';
    }
  }
  renderBoard(board);
}

document.getElementById('board').addEventListener('click', handleClick);
document.getElementById('reset').addEventListener('click', handleReset);