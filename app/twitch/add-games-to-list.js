import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, data) {
  // debugger;
  for (let i = 0; i < data.length; i++) {
    const gameItem = data[i];
    createGameElement(gameItem);
    // data.classList.add('gameItem');
    return gameItem;
    console.log(gameItem);
  }
}
