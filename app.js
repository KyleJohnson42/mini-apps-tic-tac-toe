let board = [[], [], []];
let currentTurn = 'X';
let gameWon = false;

let checkWin = (board, id, player) => {
  let win = [];
  // Check rows
  for (var i = 0; i < 3; i++) {
    if (board[id[0]][i] !== player) {
      win = [];
      break;
    }
    win.push(id);
  }
  if (win.length === 3) {
    win.push(player);
    return win;
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[i][id[1]] !== player) {
      win = [];
      break;
    }
    win.push(id);
  }
  if (win.length === 3) {
    win.push(player);
    return win;
  }
  // Check major diagonal
  for (let i = 0, j = 0; i < 3; i++, j++) {
    if (board[i][j] !== player) {
      win = [];
      break;
    }
    win.push(id);
  }
  if (win.length === 3) {
    win.push(player);
    return win;
  }
  // Check minor diagonal
  for (let i = 2, j = 0; i >= 0; i--, j++) {
    if (board[i][j] !== player) {
      win = []
      break;
    }
    win.push(id);
  }
  if (win.length === 3) {
    win.push(player);
    return win;
  }
  if (board[0].length + board[1].length + board[2].length === 9){
    return 'tie';
  }
};

let renderBoard = board => {
  for (const row in board) {
    for (const col in board[row]) {
      let id = row.toString() + col.toString();
      document.getElementById(id).innerHTML = board[row][col];
    }
  }
}

let renderWin = win => {
  console.log(win[win.length - 1] + ' WINS!')
}

let renderTie = board => {
  console.log('TIE!')
}

let handleClick = event => {
  if (event.target.innerHTML === '' && !gameWon){
    if (currentTurn === 'X') {
      let id = event.target.id;
      board[id[0]][id[1]] = 'X';
      currentTurn = 'O';
      renderBoard(board);
      let won = checkWin(board, id, 'X');
      if (won) {
        gameWon = true;
        if (won === 'tie') {
          renderTie(board);
        } else {
          renderWin(won);
        }
      }
    } else if (currentTurn === 'O') {
      let id = event.target.id;
      board[id[0]][id[1]] = 'O';
      currentTurn = 'X';
      renderBoard(board);
      let won = checkWin(board, id, 'O');
      if (won) {
        gameWon = true;
        if (won === 'tie') {
          renderTie(board);
        } else {
          renderWin(won);
        }
      }
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
  currentTurn = 'X';
  gameWon = false;
}

document.getElementById('board').addEventListener('click', handleClick);
document.getElementById('reset').addEventListener('click', handleReset);