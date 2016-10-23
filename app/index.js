import 'whatwg-fetch';
import data from './data.json';
import showGamesInList from './twitch/add-games-to-list';
const ul = document.querySelector('.results');

const x = showGamesInList(ul, data);
// debugger;
