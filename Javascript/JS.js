let humanScore = 0;
let computerScore = 0;
let draw = 0;
let gameCount = 0;

window.onload = resetGame;

document.getElementById("rockBtn").onclick = function () {
    playGame(1);
}
document.getElementById("paperBtn").onclick = function () {
    playGame(2);
}
document.getElementById("scissorBtn").onclick = function () {
    playGame(3);
}
document.getElementById("playAgain").onclick = function () {
    resetGame();

}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    draw = 0;
    gameCount = 0;


    document.getElementById("humanScore").innerHTML = "Your Score: " + humanScore;
    document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
    document.getElementById("draws").innerHTML = "Drwas: " + draw;
    document.getElementById("finalResutl").innerHTML = "";


    // document.getElementById("playAgain").disabled = false
    document.getElementById("rockBtn").disabled = false
    document.getElementById("paperBtn").disabled = false
    document.getElementById("scissorBtn").disabled = false

}

function playGame(userChoice) {
    //First Clear previous results
    document.getElementById("humanSelection").innerHTML = "";
    document.getElementById("computerSelection").innerHTML = "";
    document.getElementById("roundResult").innerHTML = "";


    let winner = "";
    let computerChoice = Math.floor(3 * Math.random() + 1);
    const choices = ["Rock", "Paper", "Scissors"];

    if (userChoice == 1) {
        document.getElementById("humanSelection").innerHTML = "You Chose: " + choices[0];
    } else if (userChoice == 2) {
        document.getElementById("humanSelection").innerHTML = "You Chose: " + choices[1];
    } else if (userChoice == 3) {
        document.getElementById("humanSelection").innerHTML = "You Chose: " + choices[2];
    }

    if (computerChoice == 1) {
        document.getElementById("computerSelection").innerHTML = "Computer Chose: " + choices[0];
    } else if (computerChoice == 2) {
        document.getElementById("computerSelection").innerHTML = "Computer Chose: " + choices[1];
    } else if (computerChoice == 3) {
        document.getElementById("computerSelection").innerHTML = "Computer Chose: " + choices[2];
    }

    if (userChoice > computerChoice) {
        document.getElementById("roundResult").innerHTML = "Result:  " + "You Won!";
        winner = "human";
    } else if (userChoice < computerChoice) {
        document.getElementById("roundResult").innerHTML = "Result:  " + "You Lost!";
        winner = "computer";
    } else if (userChoice == computerChoice) {
        document.getElementById("roundResult").innerHTML = "Result:  " + "It is a draw!";
        winner = "draw";
    }

    if (userChoice == 3 & computerChoice == 1) {
        document.getElementById("roundResult").innerHTML = "Result:  " + "You Lost!";
        winner = "computer";
    } else if (computerChoice == 3 & userChoice == 1) {
        document.getElementById("roundResult").innerHTML = "Result:  " + "You Won!";
        winner = "human";
    }

    // alert('winner is ' + winner);
    if (winner == "human") {
        humanScore = humanScore + 1
    } else if (winner == "computer") {
        computerScore = computerScore + 1;
    } else {
        draw = draw + 1;
    }
    document.getElementById("humanScore").innerHTML = "Your Score: " + humanScore;
    document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
    document.getElementById("draws").innerHTML = "Drwas: " + draw;

    //Count and increment game count
    gameCount = gameCount + 1;
    if (gameCount == 5) {
        document.getElementById("rockBtn").disabled = true;
        document.getElementById("paperBtn").disabled = true;
        document.getElementById("scissorBtn").disabled = true;


        if (humanScore > computerScore) {
            document.getElementById("finalResutl").innerHTML = "Final Result: You won!!";
        } else if (humanScore < computerScore) {
            document.getElementById("finalResutl").innerHTML = "Final Result: You Lost!!";
        } else {
            document.getElementById("finalResutl").innerHTML = "Final Result: It is a draw!!";
        }

   

    }
}



