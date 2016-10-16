import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, [data]) {
  const gameItem = document.createElement('div');

  // createGameElement(gameItem);this breaks the test
  // gameItem.classList.add('game-item');this doesnt break the test but dosent help either


  return gameItem;
}
