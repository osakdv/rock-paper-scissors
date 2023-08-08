const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const fifiScoreEl = document.querySelector("#fifi-score");
const playerScoreEl = document.querySelector("#player-score");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

let userSelectedElement;
let fifiSelectedElement;

// game scoring
let playerScore = 0;
let fifiScore = 0;

const renderScores = () => {
  // fifi score
  fifiScoreEl.style.position = "absolute";
  fifiScoreEl.style.content = `${fifiScore}`;
  fifiScoreEl.style.color = "white";
  fifiScoreEl.style.zIndex = 100;

};

renderScores();

const compareElements = () => {
  if (userSelectedElement === ROCK && fifiSelectedElement === PAPER) {
    console.log("fifi wins");
    alert("Fifi wins")
    fifiScore++;
  } else if (userSelectedElement === ROCK && fifiSelectedElement === SCISSORS) {
    console.log("User wins");
    alert("You won")
    playerScore++;
  } else if (userSelectedElement === ROCK && fifiSelectedElement === ROCK) {
    console.log("DRAW");
    alert("DRAW")
  } else if (userSelectedElement === PAPER && fifiSelectedElement === ROCK) {
    console.log("User wins");
    alert("You won")
    playerScore++;
  } else if (
    userSelectedElement === PAPER &&
    fifiSelectedElement === SCISSORS
  ) {
    fifiScore++;
  } else if (userSelectedElement === PAPER && fifiSelectedElement === PAPER) {
    console.log("DRAW");
    alert("Draw")
  } else if (userSelectedElement === SCISSORS && fifiSelectedElement === ROCK) {
    fifiScore++;
  } else if (
    userSelectedElement === SCISSORS &&
    fifiSelectedElement === PAPER
  ) {
    playerScore++;
  } else if (
    userSelectedElement === SCISSORS &&
    fifiSelectedElement === SCISSORS
  ) {
    console.log("DRAW");
  }
};

const fifaPickingElement = () => {
  const generateRandomNum = () => {
    const maxNum = 3;
    const minNum = 0;

    const range = maxNum - minNum;
    const randomValue = minNum + Math.random() * range;

    return randomValue;
  };

  const elementNum = Math.floor(generateRandomNum());
  console.log(elementNum);
  if (elementNum === 0) {
    fifiSelectedElement = ROCK;
  } else if (elementNum === 1) {
    fifiSelectedElement = PAPER;
  } else if (elementNum === 2) {
    fifiSelectedElement = SCISSORS;
  }
};

const rockPaperScissors = (elementType) => {
  if (elementType === ROCK) {
    userSelectedElement = ROCK;
  } else if (elementType === PAPER) {
    userSelectedElement = PAPER;
  } else if (elementType === SCISSORS) {
    userSelectedElement = SCISSORS;
  }

  fifaPickingElement();
  compareElements();

  console.log(userSelectedElement);
};

rock.addEventListener("click", () => {
  rockPaperScissors(ROCK);
});
paper.addEventListener("click", () => {
  rockPaperScissors(PAPER);
});
scissors.addEventListener("click", () => {
  rockPaperScissors(SCISSORS);
});
