const questionsContainer = document.querySelector(".container-game")
const startGameButton = document.querySelector(".start-quiz");
const choices = document.querySelector(".choices");
const textFinish = document.querySelector(".finish span");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

startGameButton.onclick = () => {
  questionsContainer.style.display = "flex";
  startGameButton.style.display = "none";
  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

btnRestart.onclick = () => {
  questionsContainer.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}!`;
  questionsContainer.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {

  while(choices.firstChild){
    choices.removeChild(choices.firstChild)
  }

  let item = questions[currentIndex];
  let indexNumber = currentIndex + 1;
  question.innerHTML = indexNumber + " . " + item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");
    div.classList.add("choices");

    div.innerHTML = `
    <button class="choice-text" data-correct="${answer.correct}">
      ${answer.choice}
    </button>
    `;

    if(answer.correct){
      div.dataset.correct = answer.correct
    }
    document.querySelectorAll(".choice-text").forEach((item) => {
      item.addEventListener("click", nextQuestion);
    });
    choices.appendChild(div);
  });

}


loadQuestion();


