import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, [data]) {
  const gameItem = document.createElement('div');
  gameItem.classList.add('game-item');


  return gameItem;
}
