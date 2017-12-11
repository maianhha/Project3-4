(function() {
  const myQuestions = [
    {
      question: "1.) In which city is the capital of Texas located? (Difficulty: 1)",
      answers: {
        A: "Dallas",
        B: "Houston",
        C: "Austin",
        D: "San Antonio"
      },
      correctAnswer: "C",
      level: 1
    },
    {
      question: "2.) Which is the world's longest river? (Difficulty: 2)",
      answers: {
        A: "Nile",
        B: "Amazon",
        C: "Mississippi",
        D: "Colorado"
      },
      correctAnswer: "A",
      level: 2
    },
    {
      question: "3.) Which is the world's largest country? (Difficulty: 1)",
      answers: {
        A: "Australia",
        B: "Russia",
        C: "United States",
        D: "China"
      },
      correctAnswer: "B",
      level: 1
    },
    {
      question: "4.) How many states are there in the United States? (Difficulty: 1)",
      answers: {
        A: "48",
        B: "51",
        C: "50",
        D: "49"
      },
      correctAnswer: "C",
      level: 1
    },
    {
      question: "5.) Which is the largest ocean in the world? (Difficulty: 1)",
      answers: {
        A: "Pacific",
        B: "Arctic",
        C: "Atlantic",
        D: "Indian"
      },
      correctAnswer: "A",
      level: 1
    },
    {
      question: "6.) Catalonia is a region of what country? (Difficulty: 4)",
      answers: {
        A: "Greenland",
        B: "Spain",
        C: "Brazil",
        D: "Argentina"
      },
      correctAnswer: "B",
      level: 4
    },
    {
      question: "7.) What is the smallest state in the United States? (Difficulty: 3)",
      answers: {
        A: "Delaware",
        B: "Rhode Island",
        C: "New Jersey",
        D: "New York"
      },
      correctAnswer: "B",
      level: 3
    },
    {
      question: "8.) What mountain range is Mount Everest located? (Difficulty: 4)",
      answers: {
        A: "Rockies",
        B: "Appalachian",
        C: "Andes",
        D: "Himalayas"
      },
      correctAnswer: "D",
      level: 4
    },
    {
      question: "9.) How many different languages exist in the world today? (Difficulty: 5)",
      answers: {
        A: "10,000",
        B: "200",
        C: "6500",
        D: "3000"
      },
      correctAnswer: "C",
      level: 5
    },
    {
      question: "10.) Portugal is bordered by what other country? (Difficulty: 5)",
      answers: {
        A: "France",
        B: "Spain",
        C: "Italy",
        D: "England"
      },
      correctAnswer: "B",
      level: 5
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;
    let score = 0;
    
    console.log("Starting Points: 0");
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
        score = currentQuestion.level + score;
        console.log("+" + currentQuestion.level + " points");

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    console.log("Total Points: " + score);
    console.log("You got " + numCorrect + " out of " + myQuestions.length + " questions correct")
    if ((numCorrect/myQuestions.length)*100 == 100) {
      console.log("You received a " + (numCorrect/myQuestions.length)*100 + " % -- Mastery");
    } else if ((numCorrect/myQuestions.length)*100 >= 100) {
      console.log("You received a " + (numCorrect/myQuestions.length)*100 + " % -- Sufficient");
    } else if ((numCorrect/myQuestions.length)*100 < 70) {
      console.log("You received a " + (numCorrect/myQuestions.length)*100 + " % -- Insufficient");
    }
    showSummary(numCorrect, myQuestions, score);
  }

  function showSummary(numCorrect, myQuestions, score) {
    if ((numCorrect/myQuestions.length)*100 == 100) {
      alert("Wow! You scored a perfect score! Student Level: Mastery\n\nBased off the difficulty of each question, you got " + score + " points.\n\nCheck the level list on the student page to determine your rank");
    } else if ((numCorrect/myQuestions.length)*100 >= 70) {
      alert("You passed! Student Level: Sufficient\n\nBased off the difficulty of each question, you got " + score + " points.\n\nCheck the level list on the student page to determine your rank");
    } else if ((numCorrect/myQuestions.length)*100 < 70) {
      alert("Bummer. You failed. Go study and try again for a better score. Student Level: Insufficient\n\nBased off the difficulty of each question, you got " + score + " points.\n\nCheck the level list on the student page to determine your rank");
    }
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();