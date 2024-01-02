document.addEventListener("DOMContentLoaded", function () {
    const highScoresList = document.getElementById("highscores");
    const clearButton = document.getElementById("clear");
  
    // Retrieve high scores data from local storage
    const highScoresData = JSON.parse(localStorage.getItem("highScores")) || [];
  
    // Sort the high scores by score in descending order
    highScoresData.sort((a, b) => b.score - a.score);
  
    // Display high scores on the page
    highScoresData.forEach((score, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${score.playerInitials} - ${score.score}`;
      highScoresList.appendChild(listItem);
    });
  
    // Clear high scores when the "Clear Highscores" button is clicked
    clearButton.addEventListener("click", function () {
      localStorage.removeItem("highScores");
      highScoresList.innerHTML = ""; 
    });
  });