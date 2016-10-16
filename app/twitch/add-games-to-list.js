import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, data) {
  // console.log(data);
  // debugger;
  for (let i = 0; i < data.length; i++) {
    const gameItem = data[i];
    // parentEl = data[i];
    createGameElement.appendChild(gameItem);
  }
}
  // return gameItem;
// gameItem = createGameElement(parentEl);
// gameItem.classList.add('game-item');this doesnt break the test but dosent help either
// createGameElement(gameItem);this breaks the test, switched order--still breaks
