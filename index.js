let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

// Home score
function addOneHome() {
    homeScore.innerText++
}

function addTwoHome() {
    homeScore.innerText = +homeScore.innerText + 2
}

function addThreeHome() {
    homeScore.innerText = +homeScore.innerText + 3
}

// Guest score
function addOneGuest() {
    guestScore.innerText++
}

function addTwoGuest() {
    guestScore.innerText = +guestScore.innerText + 2
}

function addThreeGuest() {
    guestScore.innerText = +guestScore.innerText + 3
}