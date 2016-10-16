import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, data) {
  const gameItem = createGameElement(data);
  for (let i = 0; i < data.length; i++) {
    data[i];
  }
  parentEl.appendChild(gameItem);
}
  // return gameItem;
// gameItem = createGameElement(parentEl);
// gameItem.classList.add('game-item');this doesnt break the test but dosent help either
// createGameElement(gameItem);this breaks the test, switched order--still breaks
