// Set of questions --> array of objects
const timerDisplay = document.querySelector(".timer span")
const startButton = document.getElementById("start")
const questions = document.getElementById("questions")
const questionTitles = document.getElementById("question-title")
const questionAnswers = document.getElementById("choices")
const finalScore = document.getElementById("final-score")
const submitButton = document.getElementById("submit")
const initialsInput = document.getElementById("initials")


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

let timeLeft; 
let timerInterval;

function startTimer(duration, display) {
    timeLeft = duration;
    timerInterval = setInterval(function() {
        display.textContent = `${timeLeft} seconds left`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }

        timeLeft--;
    }, 1000);
}



function showQuestion() {
    resetState();
    const currentQuestion = allQuestions[currentQuestionIndex];
    questionTitles.innerHTML = (currentQuestionIndex + 1) + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct; 
        questionAnswers.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    while (questionAnswers.firstChild) {
        questionAnswers.removeChild(questionAnswers.firstChild)
    }
}


// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
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
            result.textContent = ''; 
            showNextQuestion();
        }, 1000);
    } 



  
// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score




  function endQuiz() {
    clearInterval(timerInterval);
    questions.style.display = 'none';

    const endScreen = document.getElementById("end-screen");
    endScreen.style.display = "block";
    finalScore.innerHTML = timeLeft;

    initialsInput.addEventListener("input", function() {
    });

    submitButton.addEventListener("click", function() {
        const playerInitials = initialsInput.value.trim();
        if (playerInitials !== "") {
            const scoreData = {
                playerInitials: playerInitials,
                score: timeLeft
            };

             // Clear the "highScores" key
             localStorage.removeItem("highScores");
            
             const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
             highScores.push(scoreData);
             highScores.sort((a, b) => b.score - a.score);
             localStorage.setItem("highScores", JSON.stringify(highScores));
 
             window.location.href = "highscores.html";
         } else {
             alert("Initials cannot be blank.");
         }
     });
 }
 

      
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < allQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}



startButton.addEventListener("click", startQuiz);



//   highScoresList.innerHTML = highScores.map(score => `<li>${score.initials}: ${score.score}</li>`).join("");

