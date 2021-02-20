let board = [[], [], []];
let currentTurn = 'X';

let renderBoard = board => {
  for (const row in board) {
    for (const col in board[row]) {
      let id = row.toString() + col.toString();
      document.getElementById(id).innerHTML = board[row][col];
    }
  }
}

let handleClick = event => {
  if (event.target.innerHTML === ''){
    if (currentTurn === 'X') {
      let id = event.target.id;
      board[id[0]][id[1]] = 'X';
      currentTurn = 'O';
      renderBoard(board);
    } else if (currentTurn === 'O') {
      let id = event.target.id;
      board[id[0]][id[1]] = 'O';
      currentTurn = 'X';
      renderBoard(board);
    }
  }
};

let reset = event => {
  for (const row in board) {
    for (const col in board[row]) {
      board[row][col] = '';
    }
  }
  renderBoard(board);
}

document.getElementById('board').addEventListener('click', handleClick);
document.getElementById('reset').addEventListener('click', reset);