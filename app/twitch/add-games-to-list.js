import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, data) {
  // debugger;
  for (let i = 0; i < data.length; i++) {
    createGameElement(data[i]);
  }
  return createGameElement;
}
// console.log(createGameElement);
