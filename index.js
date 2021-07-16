let firstCard = getRandonCard()
let secondCard = getRandonCard()
let message = ""
let isAlive = false
let hasBlackJack = false
let cards = [firstCard, secondCard]
let sum = 0


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


function getRandonCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1){
        return 11
    }else if(randomNumber === 11 || randomNumber === 12 || randomNumber === 13){
        return 10
    }else
        return randomNumber
}

function startGame(){
    isAlive = true
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame(){
    if(sum < 21){
        message = "Do you want to draw another card?"
    }else if(sum === 21){
        message = "Wohoo! You have the blackjack"
        hasBlackJack = true
    }else{
        message = "You are out of the game!!!"
        isAlive = false
    }
    cardEl.textContent = "Your Cards Are: "
   
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ", "
    }
    messageEl.textContent = message 
    sumEl.textContent = "Sum: " + sum   
}

function newCard(){
    if((isAlive === true) && (hasBlackJack === false)){
        let card = getRandonCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}