// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
    } else {
        guessMe += 3
    }
    guessMe += 22
}console.log(guessMe)

// assume there are two variables, player1 and player2. Either of them can have the value "rock", "paper", or "scissors".

player1 = "paper"
player2 = "scissors"

if (player1 === player2) {
    console.log("It is a draw")
  } else if (player1 === "rock" && player2 === "scissors") {
    console.log("Player 1 wins.")
  } else if (player1 === "rock" && player2 === "paper") {
    console.log("Player 2 wins.")
  } else if (player1 === "scissors" && player2 === "paper") {
    console.log("Player 1 wins.")
  } else if (player1 === "scissors" && player2 === "rock") {
    console.log("Player 2 wins.")
  } else if (player1 === "paper" && player2 === "rock") {
    console.log("Player 1 wins.")
  } else {
    console.log("Player 2 wins.")
  }

temperature = 56

  if (temperature < 55) {
    console.log("Better get a jacket.")
  } else {
    console.log("T-shirt today!")
  }