import addScore from './modules';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const information = JSON.parse(localStorage.getItem('scores')) || [];
const form = document.querySelector('form');
const yname = document.querySelector('#name');
const score = document.querySelector('#score');
const tbody = document.querySelector('tbody');

function displayScores() {
  information.forEach((set) => {
    const tr = document.createElement('tr');
    tr.classList.add('list-item');
    const tdName = document.createElement('td');
    tdName.innerHTML = `${set.yname}`;
    const tdScore = document.createElement('td');
    tdScore.innerHTML = `${set.score}`;
    tr.appendChild(tdName);
    tr.appendChild(tdScore);
    tbody.appendChild(tr);
  });
}

displayScores();

if (tbody.childElementCount === 0) {
  const defaultMessage = document.createElement('p');
  defaultMessage.classList.add('text-center', 'fs-3');
  defaultMessage.innerText = 'No Scores to show';
  tbody.appendChild(defaultMessage);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (yname.value !== null && score.value !== null) {
    addScore();
    yname.value = '';
    score.value = '';
    tbody.innerHTML += `<tr class="list-item"><td>${yname.value}</td> <td>${score.value}</td></tr>`;
  }
});
