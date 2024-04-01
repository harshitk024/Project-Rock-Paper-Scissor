
document.addEventListener("DOMContentLoaded",()=>{
  
   let buttons =  document.querySelector(".buttons")

   buttons.addEventListener("click",(event)=>{
    let target = event.target
    switch(target.id){
        case "paper":
            playerChoice = "Paper"
            break;
        case "scissor":
            playerChoice = "Scissor"
            break;
        case "rock":
            playerChoice = "Rock"
            break
    }
    let result = playRound(playerChoice,getComputerChoice())
    document.querySelector("#result").textContent = result[0]
    updateScore(result)
    checkWinner()
   })
}
)

function checkWinner(){
    score = document.querySelectorAll(".score")
    isWinner = false
    if(score[0].textContent == 5){
        alert(`User Won by ${score[0].textContent}-${score[1].textContent}`)
        isWinner = true
    }
    else if(score[1].textContent == 5){
        alert(`Computer Won by ${score[1].textContent}-${score[0].textContent}`)
        isWinner = true
    }

    if(isWinner){
        score[0].textContent = 0
        score[1].textContent = 0
    }
}

function updateScore(result){
    userWon = result[1]
    compWon = result[2]
    score = document.querySelectorAll(".score")

 
    
    if(userWon){
         score[0].textContent = parseInt(score[0].textContent) + 1
    }
    else if(compWon){
        score[1].textContent = parseInt(score[1].textContent) + 1
    }

 
}


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
    let usr_winner = false , comp_winner = false

    if (player === computer) {
        return ["Tie", usr_winner,comp_winner]
    }
    else {

        if (player == "ROCK") {
            if (computer == "SCISSOR") {
                usr_winner = true
                return [`You Won ! Player : ${player} , Computer : ${computer}`,usr_winner,comp_winner]
            }
            else {
                comp_winner = true
                return [`Computer Won ! Player : ${player} , Computer : ${computer}`,usr_winner,comp_winner]
            }
        }
        else if (player == "PAPER") {
            if (computer == "SCISSOR") {
                comp_winner = true
                return [`Computer Won ! Player : ${player} , Computer : ${computer}`,usr_winner,comp_winner]
            }
            else {
                usr_winner = true
                return [`You Won ! Player : ${player} , Computer : ${computer}`,usr_winner,comp_winner]

            }
        }
        else {
            if (computer == "PAPER") {
                usr_winner = true
                return [`You Won ! Player : ${player} , Computer : ${computer}`,usr_winner,comp_winner]

            }
            else {
                comp_winner = true
                return [`Computer Won ! Player : ${player} , Computer : ${computer}`,usr_winner,comp_winner]

            }
        }
    }

}


function playGame(rounds = 5) {
 
}

playGame()

