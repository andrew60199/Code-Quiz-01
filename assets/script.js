
const startBtn = document.querySelector(".start");

// Had to move the timer into the global scope... still didnt work
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


        // Clear the buttons
        // Call the score
        // Call enter in your initals 

      }
    }, 1000);

    const timerElement = document.createElement('h2');
    
    timerElement.className = 'timer';

    // Couldn't get it perfect so this is my fix - add 60 here and 59 afterwards. Otherwise they would repeat
    timerElement.textContent = `60 seconds remaining`;

    document.body.appendChild(timerElement);    
};

let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex].title;
let questionChoice = questions[currentQuestionIndex].choices;
let questionAnswer = questions[currentQuestionIndex].answer;
let choice;

// Need to change this so it displays the question and the buttons for the various choices... 
const displayQuestions = () => {
    
  const questionTitle = document.createElement('h2');

  questionTitle.textContent = currentQuestion;

  // Add a class

  document.body.appendChild(questionTitle);

  // Display the choices
  for (let i = 0; i < 4; i++) {
    choice = document.createElement('p');
    choice.textContent = questionChoice[i];
    choice.className = 'multiple-choice';
    document.body.appendChild(choice);
    // Event listener that 
    choice.addEventListener('click', checkAnswer);
  }

  // checks if the answer is correct
  // Then cycles to the next question
  
};

const checkAnswer = () => {
  
    if (choice.textContent === questionAnswer) {
    console.log('its a match')
  } else {
    console.log(choice.textContent)
    console.log(questionAnswer)
  }
}

// const remove10 = () => {
//   timeLeft = timeLeft - 10;
// };

startBtn.addEventListener(
  "click",
    () => {
        // Call the follow functions
        countdown();

        displayQuestions();  
        
        startBtn.remove(); 
        
        // And remove the openning text

    }
);







// Test I did to make items appear on the page
    // const buttonTrue = document.createElement('div');
    // buttonTrue.className = 'true';
    // const buttonFalse = document.createElement('div');
    // buttonFalse.className = 'false';

    // startBtn.remove();

    // buttonTrue.textContent = `True`;
    // buttonFalse.textContent = `False`;

    // document.body.appendChild(buttonTrue);
    // document.body.appendChild(buttonFalse);

    // buttonFalse.addEventListener('click', remove10);



  // Create a loop that for each choice it creates an element, assigns it a class, adds it's content to the screen and displays it 
  // Ask for help - how to convert this into a loop...  

  // const choicesListed0 = document.createElement('p');

  // choicesListed0.textContent = currentQuestion.choices[0];

  // document.body.appendChild(choicesListed0);

  // const choicesListed1 = document.createElement('p');

  // choicesListed1.textContent = currentQuestion.choices[1];

  // document.body.appendChild(choicesListed1);

  // const choicesListed2 = document.createElement('p');

  // choicesListed2.textContent = currentQuestion.choices[2];

  // document.body.appendChild(choicesListed2);

  // const choicesListed3 = document.createElement('p');

  // choicesListed3.textContent = currentQuestion.choices[3];

  // document.body.appendChild(choicesListed3);