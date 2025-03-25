import {
  currentPlayer,
  board,
  makeMove,
  switchPlayer,
  gameOver,
  finishGame,
} from './js/game.js';
import {
  renderBoard,
  updateGameStatusText,
  updatePlayerHeading,
  resetUi,
} from './js/dom-functions.js';

updatePlayerHeading(currentPlayer);
renderBoard(board);

document.querySelectorAll('.cell').forEach((cell, i) => {
  cell.addEventListener('click', () => {
    if (gameOver) {
      return;
    }
    const [winner, winningSquares] = makeMove(i, currentPlayer);
    renderBoard(board);

    if (winner) {
      finishGame();
      updateGameStatusText(winner);
      document.querySelector('button').classList.remove('hidden');
      return;
    }
    switchPlayer();
    updatePlayerHeading(currentPlayer);
  });
});

document.querySelector('button').addEventListener('click', () => {
  resetUi();
});
