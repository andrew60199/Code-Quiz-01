const startBtn = document.querySelector(".start");

let timeLeft = 59;

// Copied the first half of this funtion from the weekly activities
const countdown = () => {
      
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    const timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerElement` to show the remaining seconds
        timerElement.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerElement.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerElement` to display one of two end messages based on the outcome
        timerElement.textContent = 'Times up!';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);

        clearQuestion();
        displayScore();
        // Call enter in your initals 

      }
    }, 1000);

    const timerElement = document.createElement('h2');
    timerElement.className = 'timer';
    // Couldn't get it perfect so this is my fix - add 60 here and 59 afterwards. Otherwise they would repeat
    timerElement.textContent = `60 seconds remaining`;
    document.body.appendChild(timerElement);    
};

const remove10 = () => {
  timeLeft = timeLeft - 10;
};

const displayScore = () => {
  let result = document.createElement('p');
  result.textContent = `You ended with a score of ${score} points!`;
  result.className = 'result';
  document.body.appendChild(result);
};

let currentQuestionIndex = 0;
let questionTitle;
let choice;
let score = 0;


const clearQuestion = () => {
  // Remove previous 
  document.body.removeChild(questionTitle);
  document.body.removeChild(choice);
  // HOW TO REMOVE THE OTHER CHOICES?

  nextQuestion();
};

const nextQuestion = () => {
    currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    console.log(`the end`)
    // Display 'All done!' 
    // End timer
    // Enter initials

  } else {
    displayQuestions()
  }
}

const displayQuestions = () => {
  let currentQuestion = questions[currentQuestionIndex].title;
  let questionChoice = questions[currentQuestionIndex].choices;
    
  questionTitle = document.createElement('h2');
  questionTitle.textContent = `Q${currentQuestionIndex + 1}: ${currentQuestion}`;
  // Add a class?? Not sure if it needs it
  document.body.appendChild(questionTitle);

  // Display the choices
  for (let i = 0; i < 4; i++) {
    choice = document.createElement('p');
    choice.textContent = questionChoice[i];
    choice.className = 'multiple-choice';
    document.body.appendChild(choice);

    choice.addEventListener('click', checkAnswer)
  }
};

const checkAnswer = (event) => {
  let questionAnswer = questions[currentQuestionIndex].answer;
  const answerReview = document.createElement('p');  
  
  if (event.target.innerText === questionAnswer) {
    answerReview.textContent = `Correct!`;
    document.body.appendChild(answerReview);
    score += 10;
  } else {
    // Would be cool to display this on the screen so they know 
    answerReview.textContent = `Not quite! You selected ${event.target.innerText}. The correct answer was ${questionAnswer}.`;
    document.body.appendChild(answerReview);
    remove10();
  };

  // After click run a clear function 
  clearQuestion();
};

startBtn.addEventListener(
  "click",
    () => {
      startBtn.remove(); 
      // And remove the openning text

      // Call the follow functions
      countdown();
      displayQuestions(); 
    }
);

// Notes to self:
// Use this to find what you need to select. In this case it was .innerText. Since using arrows are changed in innerHTML
// choice.addEventListener('click', checkAnswer => {
//   console.log(checkAnswer)
// })