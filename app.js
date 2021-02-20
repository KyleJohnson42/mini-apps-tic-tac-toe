let board = [[], [], []];
let currentTurn = 'X';

let handleClick = event => {
  if (currentTurn === 'X') {
    event.target.innerHTML = 'X';
    currentTurn = 'O';
  } else if (currentTurn === 'O') {
    event.target.innerHTML = 'O';
    currentTurn = 'X';
  }
};

document.getElementById('board').addEventListener('click', handleClick);