// Set of questions --> array of objects
const timerDisplay = document.getElementsByClassName("timer")[0]
const startButton = document.getElementById("start")
const questions = document.getElementById("questions")
const questionTitles = document.getElementById("question-title")
const questionAnswers = document.getElementById("choices")
const finalScore = document.getElementById("final-score")
const submitButton = document.getElementById("submit")
const Winner = document.getElementById("initials")


let currentQuestionIndex = 0;

// Each question with the following info:
  // Question text
  // Set of answers
  // Which answer is correct

  const allQuestions = [
    {
        question: "What is 2+4?",
        answers: [
            {text: "6", correct :true},
            {text: "8", correct :false},
            {text: "10", correct :false},
            {text: "4", correct :false},
        ]
},
{
    question: "What is 2X4?",
    answers: [
        {text: "6", correct :false},
        {text: "8", correct :true},
        {text: "10", correct :false},
        {text: "4", correct :false},
    ]
},
{
    question: "What is 4 divided by 2?",
    answers: [
        {text: "6", correct :false},
        {text: "8", correct :false},
        {text: "2", correct :true},
        {text: "4", correct :false},
    ]
},
{
    question: "What is 4 minus 2?",
    answers: [
        {text: "6", correct :false},
        {text: "2", correct :true},
        {text: "8", correct :false},
        {text: "4", correct :false},
    ]
},
{
    question: "What is 4 times 2?",
    answers: [
        {text: "6", correct :false},
        {text: "8", correct :true},
        {text: "2", correct :false},
        {text: "4", correct :false},
    ]
}]

// Landing page:
  // Explanation of the quiz
  // Start button


// Click the start button:
  // Landing page goes away
  // Timer starts
  // The first question appears (with its answers)

function startQuiz(){
    currentQuestionIndex = 0;
    document.getElementById('start-screen').style.display = 'none';
    questions.style.display = 'block';
    startTimer (60, timerDisplay);
    showQuestion();

}

    function startTimer(duration, display){
        let timerLeft = duration;
        let interval = setInterval(function() {
            seconds = timer;
        display.textContent= `${timeLeft} seconds left`;

        if (timer-- <= 0){
            clearInterval(interval);
            alert ('Time is up!');

        }
        }, 1000);
    }


function showQuestion(){
    resetState();
    const currentQuestion = allQuestions[currentQuestionIndex];
    questionTitles.innerHTML =(currentQuestionIndex + 1) + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        button.dataset.correct = answers.correct; 
        questionAnswers.appendChild(button);
        button.addEventListener ("click", selectAnswer);
    });
}

function resetState() {
    while (questionAnswers.firstChild) {
        questionAnswers.removeChild(questionAnswer.firstChild)
    }
}


// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const result = document.getElementById("result");
   
    if(isCorrect){
        selectedBtn.classList.add("correct");
        result.textContent = "Correct!"
    }else{
        selectedBtn.classList.add("incorrect");
        result.textContent = "Incorrect!"

        timeLeft = Math.max(timeLeft - 10, 0);
    }

        setTimeout(() => {
            showNextQuestion();
        }, 3000);
    } 

    
    function showNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < allQuestions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }

startButton.addEventListener('click', startQuiz);


// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score


// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again