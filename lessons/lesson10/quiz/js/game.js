const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const scoreText = document.getElementById('score');
const questionCounterText = document.getElementById('questionCounter');

//alert(JSON.stringify(choices));

let currentQuestion;
let questionCounter = 0;
let availabeQuestions = [];
let score = 0;
let acceptingAnswers = false;

let questions = [
   {
      question: 'What we use to link JS to HTML',
      choice1: 'link',
      choice2: 'script',
      choice3: 'js',
      choice4: 'head',
      answer: 2
   },
   {
      question: 'What we use to link CSS to HTML',
      choice1: 'link',
      choice2: 'head',
      choice3: 'html',
      choice4: 'css',
      answer: 1
   },
   {
      question: 'Where we can\'t store data using JS',
      choice1: 'localStorage',
      choice2: 'sessionStorage',
      choice3: 'image',
      choice4: 'WebSQL',
      answer: 3
   },
   {
      question: '2 + 2 * 2',
      choice1: '8',
      choice2: '6',
      answer: 2
   }
];

// Used constants
const CORRECT_BONUS = 5;
const MAX_QUESTIONS = 4;

// Immediately Invoked Function Expression (IIFE)
// (function() {
//    setTimeout(() => {
//       alert("I'm coming for you!")
//    }, 1000);
// })()

let startGame = () => {
   questionCounter = 0;
   score = 0;
   // il copie array in array
   availabeQuestions = [...questions];
   getNewQuestion();
}

let getNewQuestion = () => {
   if (availabeQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      return window.location.assign("./end.html");
   }

   questionCounter++;
   questionCounterText.innerHTML = `${questionCounter} / ${MAX_QUESTIONS}`

   const questionIndex = Math.floor(Math.random() * availabeQuestions.length);
   currentQuestion = availabeQuestions[questionIndex];
   // question.innerHTML = currentQuestion["question"];
   question.innerHTML = currentQuestion.question;
   choices.forEach((choice) => {
      const number = choice.dataset['number'];
      choice.innerHTML = currentQuestion["choice" + number]
   })

   //remove current question from array
   availabeQuestions.splice(questionIndex, 1);
   acceptingAnswers = true;
}

choices.forEach((choice) => {
   choice.addEventListener('click', (event) => {
      if (!acceptingAnswers) return;
      acceptingAnswers = false;
      const selectedChoice = event.target;
      const selectedAnswer = selectedChoice.dataset['number'];

      const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'wrong';

      if (classToApply === "correct") {
         incrementScore(CORRECT_BONUS);
      }

      selectedChoice.parentElement.classList.add(classToApply);
      setTimeout(() => {
         selectedChoice.parentElement.classList.remove(classToApply);

         getNewQuestion();
      }, 2500);
   })
})

let incrementScore = num => {
   score += num;
   scoreText.innerHTML = score;
}

startGame();