

function compPlay() {
    const number = Math.floor(Math.random() * (3 - 0) + 0)
    switch (number) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}
function playerInput() {
    while (true) {
        // console.log("Select Rock,Paper, or Scissors: ");
        let input = prompt("Select Rock,Paper, or Scissors: ");
        input = input.toLowerCase();
        if (input == "rock" || input == "paper" || input == "scissors") {
            return input;
        }
        else
            console.log("You idiot!");
    }
}
function playRound(input) {
    x = input.classList;
    const pInput = x.item(0);
    let cInput = compPlay();
    if (cInput == pInput) {
        return "Draw!";
    }
    if (pInput == "scissors") {
        return (cInput == "rock") ? "Lose!" : "Win!";
    }
    if (cInput == "scissors") {
        return (pInput == "rock") ? "Win!" : "Lose!";
    }
    return (pInput == "paper") ? "Win!" : "Lose!";

}

function game() {
    //initialize score
    let pScore = 0;
    let cScore = 0;
    let currentRound = 1;

    //get references to Domlist
    const butts = document.querySelectorAll("button");
    const resultOutput = document.querySelector(".result");
    const pScoreOutput = document.querySelector(".pScore");
    const cScoreOutput = document.querySelector(".cScore");

    //primary round logic
    butts.forEach(butt => {
        butt.addEventListener('click', event => {
            let result = playRound(butt)
            switch (result) {
                case "Win!": pScore++;
                    break;
                case "Lose!": cScore++;
                    break;
                case "Draw!": break;
                default: alert("Something went wrong!");
            }
            resultOutput.textContent = ("Round " + (currentRound++) + ": " + result);
            pScoreOutput.textContent = ("Player Score: " + pScore);
            cScoreOutput.textContent = ("Computer Score: " + cScore);


            //scorekeeping and end result display
            if (currentRound >= 6) {

                console.log("aslidjfghasl");
                if (pScore == cScore) {
                    alert("You tied");
                    return;
                }
                if (pScore > cScore)
                    alert("You did it!");
                else
                    alert("You suck!");
            }
        })
    })



}
game();





//PSEUDO CODE
// computer play function:
// select a random number 0-2 
// switch(number)
// 1:return rock
// 2:return paper
// 3:return scissorz


// player input function:
// while(valid option not entered){
// write "select an option"
// get player input.
// lower case it.
// check if its a valid option.
// if its not berate the user
// if it is return the option
// }

// round play function:
// get player input
// get computer input
// check if inputs are =
// if so return"draw"
// check if user has scissorz
// if so
//     if comp has rock - return"lose"
//     else - return"win"
// check if comp has scissorz
//     if user has rock - return"win"
//     else - return"lose"
// if user has paper - return"win"
// else - return"lose"


// game function
// Declare player score variable
// Declare comp score variable
// for loop 5 times{
// call the round play function
// Increment the winner’s score
// output the round result
// }
// If (player score > comp score) { 
// write  “You won”
// }
// Else write “You lose idiot!”



