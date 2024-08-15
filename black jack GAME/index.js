let player = {
    name : "Amir",
    chips: 200 ,
}
let cards = []
let sum = 0 
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " :" +  player.chips + "$" 


function getRandomCard() {
    let randomeNum = Math.floor(Math.random() *13) + 1
    if (randomeNum >10) {
        return 10
} else if(randomeNum === 1) {
    return 11
} else {
    return randomeNum
}
} 
function startGame() {   
    isAlive = true
    let firstCard = getRandomCard() ;
    let secondCard = getRandomCard() ;
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()   
}
 function renderGame() {
    sumEl.textContent = "sum :" + sum 
    cardEl.textContent = "cards = "
    for (i = 0; i<cards.length; i++){
        cardEl.textContent  += cards[i] + "-"
    }
if (sum <= 20) {
    message = ("🙄do u want to draw a new card ??🤔")  
    sumEl.textContent = "sum :" + sum     
}
else if (sum === 21) {
    message = ("😍victory ! Blackjack 😍")
    hasBlackjack = true
} else {
    message = ("😭Defeated😭")
    isAlive = false
}
messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}

// im so happy :D