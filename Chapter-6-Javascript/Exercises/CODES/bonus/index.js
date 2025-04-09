// Initialize game variables
let lives = 3;
let score = 0;

// Function to generate a random RGB color
function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to start the game
function startGame() {
    if (lives <= 0) {
        lives = 3;
        score = 0;
    }

    document.getElementById("lives").innerText = lives;
    document.getElementById("score").innerText = score;
    document.getElementById("message").innerText = "";

    let correctColor = generateRandomColor();
    document.getElementById("rgb-display").innerText = correctColor;

    let optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    let correctIndex = Math.floor(Math.random() * 3);

    // Generate three color options (one correct, two random)
    for (let i = 0; i < 3; i++) {
        let color = (i === correctIndex) ? correctColor : generateRandomColor();
        let option = document.createElement("div");

        option.classList.add("color-option");
        option.style.backgroundColor = color;

        // Add event listener to check the user's choice
        option.addEventListener("click", function() {
            if (color === correctColor) {
                document.getElementById("message").innerText = "Correct!";
                score++;
            } else {
                document.getElementById("message").innerText = "Wrong! Try Again.";
                lives--;
            }

            if (lives <= 0) {
                document.getElementById("message").innerText = "Game Over! Final Score: " + score;
            } else {
                startGame();
            }
        });

        optionsContainer.appendChild(option);
    }
}

// Start the game on page load
startGame();
