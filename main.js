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
    index = Math.floor(Math.random()*12);
    showCard();

}