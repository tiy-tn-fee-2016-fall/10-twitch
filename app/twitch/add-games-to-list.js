import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, data) {
  parentEl.innerHTML = '';

  for (let i = 0; i < data.top.length; i++) {
    const game = data.top[i];
    const el = createGameElement(game);
    parentEl.appendChild(el);
  }
}
