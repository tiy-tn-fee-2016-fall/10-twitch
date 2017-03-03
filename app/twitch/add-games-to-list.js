import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, data) {
  parentEl.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const game = data[i];
    const el = createGameElement(game.game);
    parentEl.appendChild(el);
  }
}
