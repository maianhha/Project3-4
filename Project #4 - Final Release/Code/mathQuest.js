(function() {
  const myQuestions = [
    {
      question: "1.) What is the slope for the equaton y = 8x + 20? (Difficulty: 2)",
      answers: {
        A: "1",
        B: "20",
        C: "8",
        D: "None of the above"
      },
      correctAnswer: "C",
      level: 2
    },
    {
      question: "2.) Given the function, f(x) = 3x + 2, find f(-100). (Difficulty: 2)",
      answers: {
        A: "302",
        B: "-302",
        C: "298",
        D: "-298"
      },
      correctAnswer: "D",
      level: 2
    },
    {
      question: "3.) Which equation would indicate a line parallel to the function y = 6x + 10? (Difficulty: 1)",
      answers: {
        A: "y = 6",
        B: "y = (12/2)x + 18",
        C: "y = -(1/6)x + 2",
        D: "x = 6"
      },
      correctAnswer: "B",
      level: 1
    },
    {
      question: "4.) To evaluate (x^9)/(x^3), what do you do to the exponents? (Difficulty: 3)",
      answers: {
        A: "Add",
        B: "Multiply",
        C: "Divide",
        D: "Subtract"
      },
      correctAnswer: "D",
      level: 3
    },
    {
      question: "5.) Simplify -3x + 7 > 8 +6x. (Difficulty: 3)",
      answers: {
        A: "x < -(1/9)",
        B: "x > -(1/9)",
        C: "x < 9",
        D: "x < (1/9)"
      },
      correctAnswer: "A",
      level: 3
    },
    {
      question: "6.) What is 90 degrees in terms of pi? (Difficulty: 3)",
      answers: {
        A: "pi / 4",
        B: "pi",
        C: "2 * pi",
        D: "pi / 2"
      },
      correctAnswer: "D",
      level: 3
    },
    {
      question: "7.) If two equations with two variables are to be solved together, what are they called? (Difficulty: 4)",
      answers: {
        A: "Differential Equations",
        B: "Simulataneous Equations",
        C: "Parametric Equations",
        D: "Linear Equations"
      },
      correctAnswer: "B",
      level: 4
    },
    {
      question: "8.) To evaluate (3^2)(3^7), what do you do to the exponents? (Difficulty: 3)",
      answers: {
        A: "Divide",
        B: "Subtract",
        C: "Add",
        D: "Multiply"
      },
      correctAnswer: "C",
      level: 3
    },
    {
      question: "9.) What is the combination of the rational numbers and irrational numbers called? (Difficulty: 4)",
      answers: {
        A: "Natural Numbers",
        B: "Integers",
        C: "Real Numbers",
        D: "Whole Numbers"
      },
      correctAnswer: "C",
      level: 4
    },
    {
      question: "10.) Which number is both odd and prime? (Difficulty: 1)",
      answers: {
        A: "9",
        B: "21",
        C: "15",
        D: "7"
      },
      correctAnswer: "D",
      level: 1
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