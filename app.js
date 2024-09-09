const playerOne = "O";
const playerTwo = "X";
let currentPlayer = null; // Store the starting player

const getStartingPlayer = () => {
    // Randomly choose the starting player
    currentPlayer = Math.random() < 0.5 ? playerOne : playerTwo;

    // Get the element that shows the starting player
    const startingPlayerElement = document.querySelector('.startingPlayer');

    // Update the text content to show which player starts
    startingPlayerElement.textContent = `Player Start: ${currentPlayer}`;
    document.querySelector(".randomBtn").remove(); // Remove the random button after selection
    return currentPlayer;
};

const tile = (tileElement) => {
    // Check if the tile is already filled
    if (!tileElement.textContent) {
        // Set the current player's mark (either "O" or "X")
        tileElement.textContent = currentPlayer;

        // Toggle between players
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    }
};

// Event listener for each tile click
document.querySelectorAll('.item').forEach(tileElement => {
    tileElement.addEventListener('click', () => tile(tileElement));
});

const conditions = [
    [0, 1, 2], // Horizontal top row
    [3, 4, 5], // Horizontal middle row
    [6, 7, 8], // Horizontal bottom row
    [0, 3, 6], // Vertical left column
    [1, 4, 7], // Vertical middle column
    [2, 5, 8], // Vertical right column
    [0, 4, 8], // Diagonal from top left to bottom right
    [2, 4, 6]  // Diagonal from top right to bottom left
];