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
    let counter = 2;
    function questionLoad() {
      let questionTitle = document.getElementById("questionText");
      questionTitle.innerText = questions[counter].question;
      console.log(questionTitle);
    }
 
    questionLoad();
    let rnd = 0;

    function answerLoad () {

      let c = 0;
      let answers = [];
  
      let boolAnswers = [2,3,8];
      let isBool = false;
      for(let i = 0; i < boolAnswers.length; i++){
        if(counter === boolAnswers[i]){
          isBool = true;
          break;
        }
      }

      rnd = isBool === false ? Math.floor(Math.random()*4) : Math.floor(Math.random()*2);

      let correctAnswer = questions[counter].correct_answer;

      let loop = isBool === true ? 2 : 4;

      if(isBool === true){

        let button3 = document.getElementById("a3");
        button3.style.display = "none";
        let button4 = document.getElementById("a4");
        button4.style.display = "none";

        let buttons = document.getElementsByTagName("label");
        buttons[2].innerHTML = "";
        buttons[3].innerHTML = "";
      }

      for(let i = 0; i < loop; i++)
      {
          if(i === rnd) {
              answers[i] = correctAnswer;
              continue;
           }
          answers[i] = questions[counter].incorrect_answers[c];
          c++;
      }

      return answers;
  }
  console.log(answerLoad());

  let answersArray = document.getElementsByClassName("input-radio"); //aquisisco l'array di oggetti input-radio
  for (let i = 0; i < answersArray.length; i++) { // assegnare l'event-listener sui radio input
    answersArray[i].onclick = function () {
      checkedAnswer = +(answersArray[i].value);
      console.log("la risposta scelta è " + correctAnswer);
      console.log("la risposta giusta è " + correctAnswer);
      verifyAnswer();
    }
  }
  function verifyAnswer() { //verifica che la risposta checkata sia giusta
    if (checkedAnswer === correctAnswer) {
      console.log("risposta esatta!");
    } else {
      console.log("risposta sbagliata!");
    }
  }
  
  function loadQuestionPage() {
    
  }
  