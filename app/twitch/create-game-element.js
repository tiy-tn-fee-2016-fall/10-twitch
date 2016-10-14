export default function game(itemOne, itemTwo) {
  const item = document.createElement('div');
  item.classList.add('game-item');

  const itemName = document.createElement('h3');
  itemName.classList.add('game-item__name');
  itemName.innerText = itemOne.name;

  const itemPop = document.createElement('h4');
  itemPop.classList.add('game-item__popularity');
  itemPop.innerText = itemOne.popularity;

  item.appendChild(itemName);
  item.appendChild(itemPop);
  return item;
}
