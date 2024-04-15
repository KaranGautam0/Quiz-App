/**
 * 1) Dynamic rander quetion
 * 2) check options selected
 * if no then show worrming
 * else yes than show score and next quetuon
 * 5)total score at the end on quetion
 */

const quiz = [
  {
    question: "What is the most used programming language in 2024?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];

const question = document.getElementById("Quize-question");
const option_a = document.querySelector("#text_option_a");
const option_b = document.querySelector("#text_option_b");
const option_c = document.querySelector("#text_option_c");
const option_d = document.querySelector("#text_option_d");
const answerElement = document.querySelectorAll(".answer");
let cout = document.querySelector(".counts");

const submit = document.querySelector("#Submit");

let currentQuestion = 0;
let score = 0;

cout.textContent = `${currentQuestion} / ${quiz.length} `;

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click", () => {
  const checkAns = document.querySelector('input[type="radio"]:checked');
  // console.log(checkAns.nextElementSibling.textContent);
  if (checkAns === null) {
    alert("Please select an answer");
  } else {
    if (
      checkAns.nextElementSibling.textContent === quiz[currentQuestion].answer
    ) {
      score++;
    }

    checkAns.checked = false;
    currentQuestion++;

    cout.textContent = `${currentQuestion} / ${quiz.length} `;

    if (currentQuestion < quiz.length) {
      question.textContent = quiz[currentQuestion].question;
      option_a.textContent = quiz[currentQuestion].ans1text;
      option_b.textContent = quiz[currentQuestion].ans2text;
      option_c.textContent = quiz[currentQuestion].ans3text;
      option_d.textContent = quiz[currentQuestion].ans4text;
      checkAns.checked = false;
    } else {
      
      const Restut = document.querySelector(".quize-Cantainer");
      Restut.innerHTML = `  
   
    <h1 >Your score is </h1>
    <div class="circle">
        <p class="score">${score}</p>
      <hr>
        <p class="outof">${quiz.length}</p>
    </div>`;
      Restut.classList.add("result");
    }
  }
});
