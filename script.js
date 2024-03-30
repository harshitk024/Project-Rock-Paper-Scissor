function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    if (choice == 0) {
        return "Rock"
    }
    else if (choice == 1) {
        return "Scissor"
    }
    else {

        return "Paper"
    }
}


function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toUpperCase()
    const computer = computerSelection.toUpperCase()

    if (player === computer) {
        return "Tie"
    }
    else {

        if (player == "ROCK") {
            if (computer == "SCISSOR") {
                return `You Won ! Player : ${player} , Computer : ${computer}`
            }
            else {
                return `Computer Won ! Player : ${player} , Computer : ${computer}`
            }
        }
        else if (player == "PAPER") {
            if (computer == "SCISSOR") {
                return `Computer Won ! Player : ${player} , Computer : ${computer}`
            }
            else {
                return `You Won ! Player : ${player} , Computer : ${computer}`

            }
        }
        else {
            if (computer == "PAPER") {
                return `you Won ! Player : ${player} , Computer : ${computer}`

            }
            else {
                return `Computer Won ! Player : ${player} , Computer : ${computer}`

            }
        }
    }

}


function playGame(rounds = 5) {
    let i;
    for (i = 0; i < rounds; i++) {
        let comp = getComputerChoice()
        let player = prompt("Enter your choice :  ")
        console.log(playRound(player, comp))
    }
}

playGame()

