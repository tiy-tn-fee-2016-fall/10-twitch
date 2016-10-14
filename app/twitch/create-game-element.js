export default function game(itemOne, itemTwo) {
  const item = document.createElement('div');
  item.classList.add('game-item');

  const itemName = document.createElement('h3');
  itemName.classList.add('game-item__name');
  item.appendChild(itemName);

  return item;
}
