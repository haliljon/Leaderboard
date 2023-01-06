function displayScores(data) {
  data.forEach((set) => {
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    tr.classList.add('list-item');
    const tdName = document.createElement('td');
    tdName.innerHTML = `${set.user}`;
    const tdScore = document.createElement('td');
    tdScore.innerHTML = `${set.score}`;
    tr.appendChild(tdName);
    tr.appendChild(tdScore);
    tbody.appendChild(tr);
  });
}

export default displayScores;
