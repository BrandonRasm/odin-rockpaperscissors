let y = 0;

function compPlay() {
    const number = Math.floor(Math.random() * (3 - 0) + 0)
    switch (number) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}
function playerInput() {
    while (y < 3000) {
        // console.log("Select Rock,Paper, or Scissors: ");
        let input = prompt("Select Rock,Paper, or Scissors: ");
        input = input.toLowerCase();
        if (input == "rock" || input == "paper" || input == "scissors") {
            return input;
        }
        else
            console.log("You idiot!");
        y++;
    }
}

const x = playerInput();
console.log(x);






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



