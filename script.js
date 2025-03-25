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
    const result = makeMove(i, currentPlayer);
    renderBoard(board);
    console.log(result);
    if (result) {
      finishGame();
      updateGameStatusText(result[0]);
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
