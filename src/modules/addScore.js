const addScore = async (user, score, URL) => {
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ user: user.value, score: score.value }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  user.value = '';
  score.value = '';
};

export default addScore;
