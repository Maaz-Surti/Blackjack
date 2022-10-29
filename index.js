let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let cards = []

let player = {

    playerName: "Maaz",
    playerChips: 145
}

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = `${player.playerName}: $${player.playerChips}`

function startGame() {

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards.push(firstCard)
    cards.push(secondCard)

    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    cardsEl.textContent = `Cards: `

    for (i = 0; i <= cards.length - 1; i++) {

        cardsEl.textContent += `${cards[i]} `
    }

    sumEl.textContent = `Sum: ${sum}`

    if (sum < 21) {

        message = "Do you need a new card?"

    } else if (sum === 21) {

        message = "Woohoo! You have got blackjack!"
        hasBlackjack = true

    } else {

        message = "You are out of the game!"
        isAlive = false
    }

    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message

}

function newCard() {

    if (isAlive && !hasBlackjack) {

        let card = getRandomCard()
        sum += card
        cards.push(card)

        renderGame()
    }
}

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {

        return 11

    } else if (randomNumber > 10) {

        return 10

    } else {

        return randomNumber
    }

}

