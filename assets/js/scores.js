  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    const highScoresList = document.getElementById("highscores");
    console.log("High scores list element:", highScoresList);

    const clearButton = document.getElementById("clear");
    console.log("Clear button element:", clearButton);

    // Retrieve high scores data from local storage
    const highScoresData = JSON.parse(localStorage.getItem("highScores")) || [];
    console.log("Retrieved highScoresData from localStorage:", highScoresData);

    // Sort the high scores by score in descending order
    highScoresData.sort((a, b) => b.score - a.score);
    console.log("Sorted highScoresData:", highScoresData);

    // Display high scores on the page
    highScoresData.forEach((score, index) => {
        console.log(`Processing score #${index + 1}:`, score);

        const listItem = document.createElement("li");
        listItem.textContent = `${score.playerInitials} - ${score.score}`;
        highScoresList.appendChild(listItem);

        console.log("List item added:", listItem);
    });

    // Clear high scores when the "Clear Highscores" button is clicked
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("highScores");
        highScoresList.innerHTML = "";
        console.log("Cleared highScores from localStorage and UI");
    });
});