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

const playerScore = document.getElementById("playerScore");
const cpuScore = document.getElementById("cpuScore");

let player1Score = 0;
let computerScore = 0;

let selectedPlayer = "CPU";

playerbtn.addEventListener("click", () => {
    getData();
});

cpuBtn.addEventListener("click", () => {
    getData();
    alert();
});

const getData = () => {
    return fetch('http://localhost:5023/api/RockPaperScissorLizardSpock/Fetch/paper')
        .then(response => response.text())
        .then(data => (data));
}

let SelectedMode = "1 Win"
let winLimit = 1;

oneWinBtn.addEventListener("click", async () => {

    let data = await getData();
    console.log(data);

    if (data === "player") {
        player1Score++;
        playerScore.textContent = player1Score;
    }

    if (data === "CPU") {
        computerScore++;
        cpuScore.textContent = computerScore;
    }
});

threeFiveBtn.addEventListener("click", async () => {

    let data = await getData(3)
    console.log(data);

    if (data === "player") {
        player1Score++;
        playerScore.textContent = player1Score;
    }

    if (data === "CPU") {
        computerScore++;
        cpuScore.textContent = computerScore;
    }
});

fourSevenBtn.addEventListener("click", async () => {

    let data = await getData(4)
    console.log(data);

    if (data === "player") {
        player1Score++;
        playerScore.textContent = player1Score;
    }

    if (data === "CPU") {
        computerScore++;
        cpuScore.textContent = computerScore;
    }
});

rockBtn.addEventListener("click", async () => {
    let data = await getData();
    console.log(data);
});

paperBtn.addEventListener("click", async () => {
    let data = await getData();
    console.log(data);
});

scissorBtn.addEventListener("click", async () => {
    let data = await getData();
    console.log(data);
});

lizardBtn.addEventListener("click", async () => {
    let data = await getData();
    console.log(data);
});

spockBtn.addEventListener("click", async () => {
    let data = await getData();
    console.log(data);
});

const checkWinner = () => {
    if (player1Score === winLimit) {
        console.log("Player Won the Match");
        resetGame();
    }

    if (computerScore === winLimit) {
        console.log("CPU won the Match");
        resetGame();
    }
};

const resetGame = () => {
    player1Score = 0;
    computerScore = 0;
    playerScore.textContent = 0;
    cpuScore.textContent = 0;
}



















