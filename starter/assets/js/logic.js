// Set of questions --> array of objects
const timer = document.getElementByClass("timer")
const startButton = document.getElementById("start")
const questions = document.getElementById("questions")
const questionTitles = document.getElementById("question-title")
const questionAnswers = document.getElementById("choices")
const finalScore = document.getElementById("final-score")
const submitButton = document.getElementById("submit")
const Winner = document.getElementById("initials")



// Each question needs the following:
  // Question text
  // Set of answers
  // Which answer is correct

  const allQuestions = [
    {
        questions: "What is 2+4?",
        answers: [
            {text: "6", correct :true},
            {text: "8", correct :false},
            {text: "10", correct :false},
            {text: "4", correct :false},
        ]
},
{
    questions: "What is 2X4?",
    answers: [
        {text: "6", correct :false},
        {text: "8", correct :true},
        {text: "10", correct :false},
        {text: "4", correct :false},
    ]
},
{
    questions: "What is 4 divided by 2?",
    answers: [
        {text: "6", correct :false},
        {text: "8", correct :false},
        {text: "2", correct :true},
        {text: "4", correct :false},
    ]
},
{
    questions: "What is 4 minus 2?",
    answers: [
        {text: "6", correct :false},
        {text: "2", correct :true},
        {text: "8", correct :false},
        {text: "4", correct :false},
    ]
},
{
    questions: "What is 4 times 2?",
    answers: [
        {text: "6", correct :false},
        {text: "8", correct :true},
        {text: "2", correct :false},
        {text: "4", correct :false},
    ]
},

// Landing page:
  // Explanation of the quiz
  // Start button


// Click the start button:
  // Landing page goes away
  // Timer starts
  // The first question appears (with its answers)

function startQuiz(e){
    currentQuestionIndex = 0;
    startButton = e.target;
    startButton.addEventListener('click', showQuestion, startTimer);

    function (){
        let sixtySeconds =59;
        let display = document.getElementById('timer');
        startTimer(sixtySeconds, display);
    } )

}

    funtion startTimer(duration, time){
        let timer = duration, seconds;
        let interval = setInterval(function(){
            seconds = parseInt(timer % 60,10);
        const time = document.getElementById("#time");
        time.textContent= `${seconds} seconds left`;

        if (--timer<0){
            clearInterval(interval);
            alert ('Time is up!');

        }
        }, 1000);
    }


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + "." +currentQuestion.question;

    currentQuestions.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        questionAnswers.appendChild(button);
        if (answer,correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener ("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
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
    const result = document.getElementById("result")
    const isCorrect = selctedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add ("correct");
        result.textContent = "Correct!"
    }else{
        selectedBtn.classList.add ("incorrect");
        result.textContent = "Incorrect!"
        timer = timer - 100;
    } 

    
    setTimeout(function() {
        let nextQuestionNum = currentQuestionIndex + 1;
        let nextElem = document.getElementById('question' + nextQuestionNum);
        if (nextElem) {
            nextElem.style.display = 'block';
        } else {
            alert("End of Quiz");
        }
    }, 3000);
}


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