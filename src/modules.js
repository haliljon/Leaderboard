const information = JSON.parse(localStorage.getItem('scores')) || [];
const yname = document.querySelector('#name');
const score = document.querySelector('#score');
function addScore() {
  const newSet = { yname: yname.value, score: score.value };
  information.push(newSet);
  localStorage.setItem('scores', JSON.stringify(information));
  return newSet;
}

module.exports = addScore;
