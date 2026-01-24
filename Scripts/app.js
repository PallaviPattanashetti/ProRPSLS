const playerbtn = document.getElementById("playerBtn");
const cpuBtn = document.getElementById("cpuBtn");

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const lizardBtn = document.getElementById("lizardBtn");
const spockBtn = document.getElementById("spockBtn");

const oneWinBtn = document.getElementById("oneWinBtn");
const threeFiveBtn = document.getElementById("threeFiveBtn");
const fourSevenBtn = document.getElementById("fourSevenBtn");

const scoreTitle = document.getElementById("scoreTitle");
const playerScore = document.getElementById("playerScore");
const cpuScore = document.getElementById("cpuScore");

let player1Score = 0;
let player2Score = 0;

let selectedPlayer = "CPU";
let winLimit = 1;


let playerTurn = 1;
let player1Choice = null;



playerbtn.addEventListener("click", () => {
    selectedPlayer = "PLAYER";
    scoreTitle.textContent = "Mode: Player vs Player (Player 1 Turn)";
    resetGame();
});

cpuBtn.addEventListener("click", () => {
    selectedPlayer = "CPU";
    scoreTitle.textContent = "Mode: Player vs CPU";
    resetGame();
});



const getData = (choice) => {
    return fetch(`http://localhost:5023/api/RockPaperScissorLizardSpock/Fetch/${choice}`)
        .then(res => res.text())
        .then(data => data.trim().toLowerCase());
};


oneWinBtn.onclick = () => {
    winLimit = 1;
    resetGame();
};

threeFiveBtn.onclick = () => {
    winLimit = 3;
    resetGame();
};

fourSevenBtn.onclick = () => {
    winLimit = 4;
    resetGame();
};



async function handlePlay(choice) {

 
    if (selectedPlayer === "CPU") {
        const result = await getData(choice);

        console.log("API result:", result);

       if (result.includes("player")) {
    player1Score++;
    scoreTitle.textContent = `You picked ${choice}. Player won the round!`;
}
else if (result.includes("cpu")) {
    player2Score++;
    scoreTitle.textContent = `You picked ${choice}. CPU won the round!`;
}
else {
    scoreTitle.textContent = "It's a draw!";
}

        updateUI();
        checkWinner();
        return;
    }

  
    if (playerTurn === 1) {
        player1Choice = choice;
        playerTurn = 2;
        scoreTitle.textContent = "Player 2 Turn";
    }
    else {
        const result = getPvPWinner(player1Choice, choice);

        if (result === 1) {
            player1Score++;
            scoreTitle.textContent = "Player 1 wins the round!";
        }
        else if (result === 2) {
            player2Score++;
            scoreTitle.textContent = "Player 2 wins the round!";
        }
        else {
            scoreTitle.textContent = "It's a draw!";
        }

        playerTurn = 1;
        player1Choice = null;
        updateUI();
        checkWinner();
    }
}


function getPvPWinner(p1, p2) {
    if (p1 === p2) return 0;

    const rules = {
        rock: ["scissor", "lizard"],
        paper: ["rock", "spock"],
        scissor: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["rock", "scissor"]
    };

    return rules[p1].includes(p2) ? 1 : 2;
}



rockBtn.onclick = () => handlePlay("rock");
paperBtn.onclick = () => handlePlay("paper");
scissorBtn.onclick = () => handlePlay("scissor");
lizardBtn.onclick = () => handlePlay("lizard");
spockBtn.onclick = () => handlePlay("spock");



function updateUI() {
    playerScore.textContent = `Player 1 Score: ${player1Score}`;
    cpuScore.textContent =
        selectedPlayer === "CPU"
            ? `CPU Score: ${player2Score}`
            : `Player 2 Score: ${player2Score}`;
}

function checkWinner() {
    if (player1Score === winLimit) {
        alert("Player 1 Wins the Match!");
        setTimeout(resetGame, 500);
    }

    if (player2Score === winLimit) {
        alert(selectedPlayer === "CPU" ? "CPU Wins the Match!" : "Player 2 Wins the Match!");
        setTimeout(resetGame, 500);
    }
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    playerTurn = 1;
    player1Choice = null;
    updateUI();
}
