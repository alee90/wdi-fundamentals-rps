////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
getInput()
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
        console.log("tie!");
        return winner;
    } 
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else {
        return "N/A";
    }
    console.log(winner + " won");
    return winner;

    
}
function playToFive() {
    console.log("let's play rock, paper, scissors");
    var playerWins = 0;
    var computerWins = 0;   
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove, computerMove);
    if (winner === "player") {
            console.log("you: " + playerMove + " computer: " + computerMove + ". you won this round.");
            playerWins++;
    } else if (winner === "computer") {
        console.log("you: " + playerMove + " computer: " + computerMove + ". computer won this round.");
        computerWins++;
    } else if (winner === "tie") {
        console.log("tie!");
    } 
        else{
            break;
        }
        console.log("you: " + playerWins + " computer: " + computerWins);
    }   
    return [playerWins, computerWins];
}

