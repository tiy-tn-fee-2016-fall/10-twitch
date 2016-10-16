import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, [data]) {
  const gameItem = document.createElement('div');

  // gameItem.classList.add('game-item');this doesnt break the test but dosent help either
  // createGameElement(gameItem);this breaks the test, switched order--still breaks


  return gameItem;
}
