(function() {
    const myQuestions = [
      {
        question: "1.) How many bones are in the human body? (Difficulty: 1)",
        answers: {
          A: "302",
          B: "100",
          C: "206",
          D: "296"
        },
        correctAnswer: "C",
        level: 1
      },
      {
        question: "2.) The molecule 'hemoglobin' is used in which type of cells? (Difficulty: 4)",
        answers: {
          A: "Red Blood Cells",
          B: "White Blood Cells",
          C: "Stem Cells",
          D: "Muscle Cells"
        },
        correctAnswer: "A",
        level: 4
      },
      {
        question: "3.) What type of teeth are wisdom teeth? (Difficulty: 3)",
        answers: {
          A: "Incisors",
          B: "Molars",
          C: "Canines",
          D: "Premolars"
        },
        correctAnswer: "B",
        level: 3
      },
      {
        question: "4.) In humans, what is the only internal organ capable of regenerating lost tissue? (Difficulty: 5)",
        answers: {
          A: "Brain",
          B: "Kidneys",
          C: "Liver",
          D: "Heart"
        },
        correctAnswer: "C",
        level: 5
      },
      {
        question: "5.) How many pairs of chromosomes are found in the average human? (Difficulty: 2)",
        answers: {
          A: "23",
          B: "46",
          C: "12",
          D: "24"
        },
        correctAnswer: "A",
        level: 2
      },
      {
        question: "6.) What vitamin is produced when a person is exposed to sunlight? (Difficulty: 5)",
        answers: {
          A: "Vitamin B",
          B: "Vitamin C",
          C: "Vitamin A",
          D: "Vitamin D"
        },
        correctAnswer: "D",
        level: 5
      },
      {
        question: "7.) What source do most living beings use to feed, move, and reproduce? (Difficulty: 1)",
        answers: {
          A: "Plants",
          B: "Water",
          C: "Sun",
          D: "Soil"
        },
        correctAnswer: "C",
        level: 1
      },
      {
        question: "8.) Lobsters, crabs, and shrimp all belong to what group of animals? (Difficulty: 2)",
        answers: {
          A: "Chordata",
          B: "Arthropods",
          C: "Paella",
          D: "Icthyata"
        },
        correctAnswer: "B",
        level: 2
      },
      {
        question: "9.) An animal that eats only meat is called what? (Difficulty: 1)",
        answers: {
          A: "Carnivore",
          B: "Herbivore",
          C: "Omnivore",
          D: "A and B"
        },
        correctAnswer: "A",
        level: 1
      },
      {
        question: "10.) What is the most common element in the human body? (Difficulty: 4)",
        answers: {
          A: "Oxygen",
          B: "Hydrogen",
          C: "Carbon",
          D: "Helium"
        },
        correctAnswer: "A",
        level: 4
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