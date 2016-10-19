import 'whatwg-fetch';
import data from './data.json';
import showGamesInList from './twitch/add-games-to-list';

// Look up a `ul` element with a class called `results`
// Add games to the results list based on the data from `data.json`
const ul = document.querySelector('.results');
// for (let i = 0; i < data.length; i++) {
const x = showGamesInList(ul, data);
  // ul.classList.appendChild(x);
// console.log(x);
// }
