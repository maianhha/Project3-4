(function() {
    const myQuestions = [
      {
        question: "1.) Which country sponsored Christopher Columbus' voyage to the Americas in 1492? (Difficulty: 3)",
        answers: {
          A: "Spain",
          B: "France",
          C: "Italy",
          D: "Germany"
        },
        correctAnswer: "A",
        level: 3
      },
      {
        question: "2.) Who gave the 'I Have a Dream' speech? (Difficulty: 1)",
        answers: {
          A: "Martin Luther King Jr.",
          B: "Rosa Parks",
          C: "Abraham Lincoln",
          D: "Malcolm X"
        },
        correctAnswer: "A",
        level: 1
      },
      {
        question: "3.) Which president is not carved into Mount Rushmore? (Difficulty: 2)",
        answers: {
          A: "George Washington",
          B: "Theodore Roosevelt",
          C: "Franklin D. Roosevelt",
          D: "Abraham Lincoln"
        },
        correctAnswer: "C",
        level: 2
      },
      {
        question: "4.) When did the American Civil War take place? (Difficulty: 3)",
        answers: {
          A: "1865 - 1876",
          B: "1861 - 1865",
          C: "1890 - 1914",
          D: "1888 - 1907"
        },
        correctAnswer: "B",
        level: 3
      },
      {
        question: "5.) Which American president was in office the longest? (Difficulty: 5)",
        answers: {
          A: "Warren G. Harding",
          B: "Thomas Jefferson",
          C: "Franklin D. Roosevelt",
          D: "Abraham Lincoln"
        },
        correctAnswer: "C",
        level: 5
      },
      {
        question: "6.) What was the Mayflower? (Difficulty: 1)",
        answers: {
          A: "train",
          B: "ship",
          C: "wagon",
          D: "horse"
        },
        correctAnswer: "B",
        level: 1
      },
      {
        question: "7.) What did the Emancipation Proclamation do? (Difficulty: 3)",
        answers: {
          A: "Made marijuana illegal",
          B: "Freed wronged prisoners from jail",
          C: "Allowed women the ability to vote",
          D: "Freed slaves from rebellious states"
        },
        correctAnswer: "D",
        level: 3
      },
      {
        question: "8.) Who was the first female American astronaut in space? (Difficulty: 5)",
        answers: {
          A: "Sally Ride",
          B: "Mae Jemison",
          C: "Anne Lee Fisher",
          D: "Buzz Aldrin"
        },
        correctAnswer: "A",
        level: 5
      },
      {
        question: "9.) When did the United States officially gain independence from Great Britain? (Difficulty: 2)",
        answers: {
          A: "1776",
          B: "1876",
          C: "1767",
          D: "1778"
        },
        correctAnswer: "A",
        level: 2
      },
      {
        question: "10.) What do the stars on the United States flag represent? (Difficulty: 1)",
        answers: {
          A: "50 states",
          B: "Fallen Civil War soldiers",
          C: "Path to Freedom",
          D: "Riches of Independence"
        },
        correctAnswer: "A",
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