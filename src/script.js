import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import addScore from './modules/addScore';
import displayScores from './modules/displayScore';

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jNbG9fAmt9stVEvCyYoZ/scores';

const form = document.querySelector('form');
const user = document.querySelector('#name');
const score = document.querySelector('#score');

const getData = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  const information = data.result;
  displayScores(information);
};

getData();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (user.value !== null && score.value !== null) {
    addScore(user, score, URL);
  }
});

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => window.location.reload());
