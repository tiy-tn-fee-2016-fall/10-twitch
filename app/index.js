import 'whatwg-fetch';
import './data.json';
import './twitch/add-games-to-list';

const ul = document.querySelector('.results');
// Look up a `ul` element with a class called `results`
const results = document.createElement('div');
results.classList.add('.results');
// Add games to the results list based on the data from `data.json`
