const LowerA = {img:'images/LowerA.png', note:'A'};
const LowerC = {img:'images/LowerC.png', note:'C'};
const LowerD = {img:'images/LowerD.png', note:'D'};
const LowerE = {img:'images/LowerE.png', note:'E'};
const LowerF = {img:'images/LowerF.png', note:'F'};
const LowerG = {img:'images/LowerG.png', note:'G'};
const UpperB = {img:'images/UpperB.png', note:'B'};
const UpperC = {img:'images/UpperC.png', note:'C'};
const UpperD = {img:'images/UpperD.png', note:'D'};
const UpperE = {img:'images/UpperE.png', note:'E'};
const UpperF = {img:'images/UpperF.png', note:'F'};
const UpperG = {img:'images/UpperG.png', note:'G'};

let flashcards =
    [LowerA, LowerC, LowerD, LowerE, LowerF, LowerG, LowerG,
    UpperB, UpperC, UpperD, UpperE, UpperF, UpperG];

let index = 0;

window.onload = function () {
    index = 0;
    start = 0;
    showCard();
    document.getElementById("flashcard-viewer").style.display = "block";
}


function showCard() {
    const card = flashcards[index];
    document.getElementById("card-front").src = card.img;
    document.getElementById("card-back").textContent = card.note;
    document.getElementById("flashcard-inner").classList.remove("flipped");
}

function flipCard() {
    document.getElementById("flashcard-inner").classList.toggle("flipped");
}

function nextCard() {
    document.getElementById("card-back").textContent = '';
    document.getElementById("flashcard-inner").classList.remove("flipped");
    index = Math.floor(Math.random()*12);
    document.getElementById("card-front").src = flashcards[index].img;
    setTimeout(showCard, 200);
}

    let startTime = Date.now();

    // Update the count down every 1 second
let x = setInterval(function() {

    // Get today's date and time
    let now = Date.now();

    let distance = 302000 + startTime - now;

    // Time calculations for days, hours, minutes and seconds
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
}
}, 1000);
