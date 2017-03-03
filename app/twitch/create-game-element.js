export default function createGameElement(game) {
  const item = document.createElement('li');
  item.classList.add('game-item');

  item.innerHTML = `
  <img src="" alt="" class="game-item__pic"></img>
 <div className="frame">
   <h3 class="game-item__name"></h3>
   <h4 class="game-item__popularity"></h4>
 </div>`;

  const title = item.querySelector('.game-item__name');
  title.innerText = game.name;

  const popularity = item.querySelector('.game-item__popularity');
  popularity.innerText = game.popularity + ' Viewers';

  const pic = item.querySelector('.game-item__pic');
  pic.src = game.box.large;
  pic.alt = game.name;

  return item;
}
