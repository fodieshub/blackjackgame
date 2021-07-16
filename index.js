let firstCard = 11
let secondCard = 8
let message = ""
let sum = firstCard + secondCard

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame(){
    renderGame()
}

function renderGame(){

    if(sum < 21){
        message = "Do you want to Draw a new Card?"
    }else if(sum === 21){
        message = "Wahoo!, You have BLACKJACK"
    }else{
        message = "You are Out of the Game!!!"
    }
    cardEl.textContent = "Your Cards Are: " + firstCard +", " + secondCard
    messageEl.textContent = message
    sumEl.textContent = " Sum: " + sum
}