const playerOne = "O";
const playerTwo = "X";

function getStartingPlayer() {
    // Randomly choose the starting player
    const startingPlayer = Math.random() < 0.5 ? playerOne : playerTwo;

    // Get the element that shows the starting player
    const startingPlayerElement = document.querySelector('.startingPlayer');

    // Update the text content to show which player starts
    startingPlayerElement.textContent = `Player Start: ${startingPlayer}`;
    return startingPlayer;
}

