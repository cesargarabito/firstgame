const dice = () => {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var img = document.getElementById("player1");
  img.src = `images/dice${randomNumber1}.png`;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var img = document.getElementById("player2");
  img.src = `images/dice${randomNumber2}.png`;

  if (randomNumber1 > randomNumber2) {
    document.getElementById("winner").innerHTML = "🚩Player 1 wins!";
  }

  if (randomNumber1 < randomNumber2) {
    document.getElementById("winner").innerHTML = "Player 2 wins!🚩";
  }

  if (randomNumber1 === randomNumber2) {
    document.getElementById("winner").innerHTML = "🚩Draw, play again!🚩";
  }
};
