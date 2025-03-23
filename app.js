let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was a draw! Play again.";
    msg.style.backgroundColor = "#081b13";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // Convert userChoice to lowercase for consistent comparison
    userChoice = userChoice.toLowerCase();
    
    // Generate computer choice
    const compChoice = genCompChoice();
    
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false; // Default to false
        
        if (userChoice === "rock") {
            userWin = compChoice === "scissors"; // Rock beats scissors
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock"; // Paper beats rock
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper"; // Scissors beat paper
        }
        
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});