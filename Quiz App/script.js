const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "Javascript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What is the capital of France?",
    a: "London",
    b: "Paris",
    c: "Berlin",
    d: "Rome",
    correct: "b",
  },

  {
    que: "Which planet is known as the Red Planet?",
    a: "Venus",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "b",
  },

  {
    que: 'Who wrote "Romeo and Juliet"?',
    a: "William Shakespeare",
    b: "Jane Austen",
    c: "Charles Dickens",
    d: "Leo Tolstoy",
    correct: "a",
  },

  {
    que: "What is the chemical symbol for water?",
    a: "O",
    b: "H2",
    c: "H2O",
    d: "W",
    correct: "c",
  },

  {
    que: "Which country is famous for the Taj Mahal?",
    a: "India",
    b: "China",
    c: "Egypt",
    d: "Brazil",
    correct: "a",
  },

  {
    que: "What is the largest mammal?",
    a: "Elephant",
    b: "Blue whale",
    c: "Giraffe",
    d: "Lion",
    correct: "b",
  },

  {
    que: "What is the chemical symbol for gold?",
    a: "Ag",
    b: "Au",
    c: "Pt",
    d: "G",
    correct: "b",
  },

  {
    que: "Who painted the Mona Lisa?",
    a: "Leonardo da Vinci",
    b: "Pablo Picasso",
    c: "Vincent van Gogh",
    d: "Michelangelo",
    correct: "a",
  },

  {
    que: "What is the closest planet to the Sun?",
    a: "Venus",
    b: "Mercury",
    c: "Mars",
    d: "Earth",
    correct: "b",
  },

];
let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".opt");
function loadQuestion() {
  if (index === total) {
    endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerHTML = `${index + 1}. ${data.que}`;
  optionInputs[0].nextElementSibling.innerHTML = data.a;
  optionInputs[1].nextElementSibling.innerHTML = data.b;
  optionInputs[2].nextElementSibling.innerHTML = data.c;
  optionInputs[3].nextElementSibling.innerHTML = data.d;
}

let submit = document.querySelector("#submit");
submit.addEventListener('click', function () {
  const ans = getAnswer();
  const data = questions[index];
  console.log(ans , data.correct)
  if (ans === data.correct) {
    right = right+1;
  } 
  index++;
  loadQuestion();
});
const getAnswer = () => {  
  for (let i = 0; i < optionInputs.length; i++) {
    if (optionInputs[i].checked) {
      return optionInputs[i].value;
    }
  }
};
function reset() {
  optionInputs.forEach((e) => {
    e.checked = false;
  });
}
const endQuiz = () => {
  document.getElementsByClassName("box")[0].innerHTML = ` 
    <h3>Thank You for Playing the Quiz</h3> 
     <h4>${right} / ${total} are Correct</h4>
    `;
};

loadQuestion();
