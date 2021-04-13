let score = document.getElementById("score");

function roll() {
  const randomNum = Math.floor(Math.random() * 6) + 1;

  const diceImage = `./img/dice` + randomNum + `.png`;

  document.querySelectorAll(`img`)[0].setAttribute(`src`, diceImage);

  score.innerHTML += randomNum;
  console.log(randomNum);
  console.log(score);
}

function totalCalc() {
  if (randomNum == 1) {
    alert("You Lose!");
    score.innerHTML == 0;
  } else if (score.innerHTML < 20) {
    score.innerHTML += randomNum;
  } else if (score.innerHTML >= 20) {
    alert("You Win!");
  }
}

document.getElementById("button").addEventListener("click", roll, totalCalc);
