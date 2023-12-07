const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let counter = 0;
let score = 0;
let isBool = false;
let tot = document.getElementById("progress");
tot.innerText = counter + 1;
let isCheck = false;

function check() {
  let checkbox = document.getElementById("checkbox");
  let control = document.getElementById("control");
  if (checkbox.checked === true) {
    control.href = "index.html";
  } else {
    control.href = "";
  }
}

function questionLoad() {
  let questionTitle = document.getElementById("questionText");
  questionTitle.innerText = questions[counter].question;
  console.log(questionTitle);
}
questionLoad();
// funzione che carica le domande e imposta alcuni label nascosti nel caso in cui le risposte sono 4 o 2.
function answerLoad() {
  let c = 0;
  let answers = [];
  let boolAnswers = [2, 3, 8];
// veriica quante risposte ha la domanda
  for (let i = 0; i < boolAnswers.length; i++) {
    if (counter === boolAnswers[i]) {
      isBool = true;
      break;
    } else {
      isBool = false;
    }
  }
// per selezionare una risposta random in cui posizionare la risposta corretta e quelle sbagliate
  rnd = isBool === false ? Math.floor(Math.random() * 4) : Math.floor(Math.random() * 2);

  rightAnswerCounter = rnd;

  let correctAnswer = questions[counter].correct_answer;

  let loop = isBool === true ? 2 : 4;
  let button3 = document.getElementById("ans2");
  let button4 = document.getElementById("ans3");
  let buttons = document.getElementsByTagName("label");
  if (isBool === true) {
    button3.style.visibility = "hidden";
    button4.style.visibility = "hidden";
    buttons[2].innerHTML = "";
    buttons[3].innerHTML = "";
  } else{
    button3.style.visibility = "visible";
    button4.style.visibility = "visible";
  }

  for (let i = 0; i < loop; i++) {
    let text = document.getElementById("ans"+i);
    if (i === rnd) {
      answers[i] = correctAnswer;
      text.innerHTML = questions[counter].correct_answer;
      continue;
    }
    answers[i] = questions[counter].incorrect_answers[c];
    text.innerHTML = questions[counter].incorrect_answers[c];
    c++;
  }
  console.log(answers);
  return answers;
}
answerLoad();

let answersArray = document.getElementsByClassName("input-radio"); //aquisisco l'array di oggetti input-radio

for (let i = 0; i < answersArray.length; i++) { // assegnare l'event-listener sui radio input
  answersArray[i].onclick = function () {
    checkedAnswer = +(answersArray[i].value);
    console.log("la risposta scelta è " + checkedAnswer);
    console.log("la risposta giusta è " + rightAnswerCounter);
    verifyAnswer();
  }
}

function verifyAnswer() { //verifica che la risposta checkata sia giusta
  if (checkedAnswer === rightAnswerCounter) {
    console.log("risposta esatta!");
    score++;
  } else {
    console.log("risposta sbagliata!");
  }
  counter++;
  // aggiorna il contatore delle domande rimaste, se supera il 10 si ferma
  if (counter < 10) {
    tot.innerText = counter + 1;
  } else {
    tot.innerText = 10;
  }
  console.log(tot.innerText);
  console.log("the score is "+ score);
  console.log("the counter is " + counter);
  if (counter <= 10) {
    questionLoad();
    answerLoad();
  } else {
    displayScore();
  }

}
function displayScore() { //funzione per mostrare il risultato
  let answersDiv = document.getElementById("form");
  let counterDiv = document.getElementById("count");
  let clockDiv = document.getElementById("circle");
  let questionTitle = document.getElementById("questionText");
  answersDiv.style.display = "none";
  counterDiv.style.display = "none";
  clockDiv.style.display = "none";
  questionTitle.innerText = "Your score is " + (score * 10) + " %";
}

