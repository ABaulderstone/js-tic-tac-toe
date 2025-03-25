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
};
