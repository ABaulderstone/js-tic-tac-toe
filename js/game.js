export let board = Array(9).fill('');
export let currentPlayer = selectPlayer();
export let gameOver = false;

export const finishGame = () => {
  gameOver = true;
};
function selectPlayer() {
  return Math.random() > 0.5 ? 'X' : 'O';
}

export const switchPlayer = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

export const makeMove = (i, player) => {
  if (board[i] !== '') {
    return;
  }
  board[i] = player;
  return checkWinner(board);
};

const checkWinner = (board) => {
  // rows
  for (let i = 0; i < 9; i += 3) {
    if (board[i] && board[i] === board[i + 1] && board[i] === board[i + 2]) {
      return [board[i], [i, i + 1, i + 2]];
    }
  }
  // columns
  for (let i = 0; i < 3; i++) {
    if (board[i] && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      return [board[i], [i, i + 3, i + 6]];
    }
  }
  // diagonal right
  if (board[0] && board[0] === board[4] && board[0] === board[8]) {
    return [board[0], [0, 4, 8]];
  }
  // diagonal left
  if (board[2] && board[2] === board[4] && board[2] === board[6]) {
    return [board[2], [2, 4, 6]];
  }

  // draw
  if (!board.includes('')) {
    return ['draw', []];
  }
  // game still going
  return null;
};

export const resetGame = () => {
  board = Array(9).fill('');
  currentPlayer = selectPlayer();
  gameOver = false;
};
