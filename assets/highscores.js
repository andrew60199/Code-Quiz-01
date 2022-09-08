const clearButton = document.getElementById('#clear');

renderHighscores();

function renderHighscores() {
  let highscoreEntry = JSON.parse(localStorage.getItem("gamePlayed"));

  const previousGame = document.createElement('li');
  previousGame.textContent = `${highscoreEntry.Initials} - ${highscoreEntry.Score}`;

  const list = document.querySelector('ol');
  list.appendChild(previousGame);
  console.log(previousGame)

};

function clearHighscore() {
  window.localStorage.removeItem("gamePlayed");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscore;
