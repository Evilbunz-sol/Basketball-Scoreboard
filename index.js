let countHome = 0
let countGuest = 0
let home = document.getElementById('home')
let guest = document.getElementById('guest')


function homeOne() {
    countHome += 1
    home.textContent = countHome
}

function homeTwo() {
    countHome += 2
    home.textContent = countHome
}

function homeThree() {
    countHome += 3
    home.textContent = countHome
}

function guestOne() {
    countGuest += 1
    guest.textContent = countGuest
}

function guestTwo() {
    countGuest += 2
    guest.textContent = countGuest
}

function guestThree() {
    countGuest += 3
    guest.textContent = countGuest
}

function newGame() {
    countHome = 0
    countGuest = 0
    home.textContent = 0
    guest.textContent = 0
}





