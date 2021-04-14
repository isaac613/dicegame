let score = document.getElementById("score");
let total = 0;
score.innerHTML = `Score: ${total}`;

function roll() {
  const randomNum = Math.floor(Math.random() * 6) + 1;

  total += randomNum;
  const diceImage = `./img/dice` + randomNum + `.png`;

  document.querySelectorAll(`img`)[0].setAttribute(`src`, diceImage);
  console.log(total);
  console.log(randomNum);
  console.log(score);
  if (randomNum == 1) {
    total = 0;
    score.innerHTML == `Score: ${total}`;
    alert("You Lose!");
  } else if (total < 27) {
    score.innerHTML = `Score: ${total}`;
    console.log(score.innerHTML);
    if (total > 19) {
      alert("You Win!");
      score.innerHTML = `Score: ${total}`;
    }
  }
}

document.getElementById("button").addEventListener("click", roll);
