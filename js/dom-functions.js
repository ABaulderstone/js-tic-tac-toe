import { board, currentPlayer, resetGame } from './game.js';

export const renderBoard = (arr) => {
  console.log(arr);
  arr.forEach((item, index) => {
    document.querySelector('#cell' + index).textContent = item;
  });
};

export const updatePlayerHeading = (player) => {
  const subHeading = document.querySelector('#player-turn');
  subHeading.textContent = `${player}'s turn`;
};

export const updateGameStatusText = (winner) => {
  const gameMessage = document.querySelector('#game-message');
  switch (winner) {
    case 'X':
    case 'O':
      gameMessage.textContent = `Congratulations ${winner} is the winner`;
      break;
    case 'draw':
      gameMessage.textContent = "It's a draw";
      break;
    default:
      gameMessage.textContent = '';
  }
};

export const resetUi = () => {
  resetGame();
  renderBoard(board);
  updatePlayerHeading(currentPlayer);
  updateGameStatusText(null);
  document.querySelector('button').classList.add('hidden');
  highlightSquares([0, 1, 2, 3, 4, 5, 6, 7, 8], 'black');
};

export const highlightSquares = (arr, color = 'lightgreen') => {
  arr.forEach(
    (num) => (document.querySelector('#cell' + num).style.color = color)
  );
};
