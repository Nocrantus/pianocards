const TLowerC = {img:'images/Treble/TLowerC.png', note:'C'};
const TLowerD = {img:'images/Treble/TLowerD.png', note:'D'};
const TLowerE = {img:'images/Treble/TLowerE.png', note:'E'};
const TLowerF = {img:'images/Treble/TLowerF.png', note:'F'};
const TLowerG = {img:'images/Treble/TLowerG.png', note:'G'};
const TLowerA = {img:'images/Treble/TLowerA.png', note:'A'};

const TUpperB = {img:'images/Treble/TUpperB.png', note:'B'};
const TUpperC = {img:'images/Treble/TUpperC.png', note:'C'};
const TUpperD = {img:'images/Treble/TUpperD.png', note:'D'};
const TUpperE = {img:'images/Treble/TUpperE.png', note:'E'};
const TUpperF = {img:'images/Treble/TUpperF.png', note:'F'};
const TUpperG = {img:'images/Treble/TUpperG.png', note:'G'};

const BLowerF = {img:'images/Bass/BLowerF.png', note:'F'};
const BLowerG = {img:'images/Bass/BLowerG.png', note:'G'};
const BLowerA = {img:'images/Bass/BLowerA.png', note:'A'};
const BLowerB = {img:'images/Bass/BLowerB.png', note:'B'};
const BLowerC = {img:'images/Bass/BLowerC.png', note:'C'};

const BUpperD = {img:'images/Bass/BUpperD.png', note:'D'};
const BUpperE = {img:'images/Bass/BUpperE.png', note:'E'};
const BUpperF = {img:'images/Bass/BUpperF.png', note:'F'};
const BUpperG = {img:'images/Bass/BUpperG.png', note:'G'};
const BUpperA = {img:'images/Bass/BUpperA.png', note:'A'};
const BUpperB = {img:'images/Bass/BUpperB.png', note:'B'};
const BUpperC = {img:'images/Bass/BUpperC.png', note:'C'};


let trebleBoth =
    [TLowerC, TLowerD, TLowerE, TLowerF, TLowerG, TLowerA,
    TUpperB, TUpperC, TUpperD, TUpperE, TUpperF, TUpperG];
let trebleLines =
    [TLowerC, TLowerE, TLowerG, TUpperB, TUpperD, TUpperF];
let trebleSpaces =
    [TLowerD, TLowerF, TLowerA, TUpperC, TUpperE, TUpperG];

let bassBoth =
    [BLowerF, BLowerG, BLowerA, BLowerB, BLowerC, BUpperD,
    BUpperE, BUpperF, BUpperG, BUpperA, BUpperB, BUpperC];

let bassLines =
    [BLowerG, BLowerB, BUpperD, BUpperF, BUpperA, BUpperC];

let bassSpaces =
    [BLowerF, BLowerA, BLowerC, BUpperE, BUpperG, BUpperB]


let flashcards = [];

let index = 0;



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

    index = generateNewIndex();

    document.getElementById("card-front").src = flashcards[index].img;
    setTimeout(showCard, 200);
}

function generateNewIndex() {
    let newIndex = Math.floor(Math.random()*flashcards.length);
    if (newIndex === index){
        return generateNewIndex();
    }
    else{
        return newIndex;
    }
}

function toggleTimer() {
    document.getElementById("timer").classList.toggle("not-displayed");
}

function start(){

    hideEverything();

    selectFlashcardSet();

    //initialize flashcards
    index = 0;
    showCard();
    document.getElementById("flashcard-viewer").style.display = "block";

    runTimer();
}

function hideEverything(){
    //hides options and shows flashcards
    document.getElementById("flashcard").classList.toggle("not-displayed");
    document.getElementById("startButton").classList.toggle("not-displayed");
    document.getElementById("nextButton").classList.toggle("not-displayed");
    document.getElementById("timerButton").classList.toggle("not-displayed");
    document.getElementById("options").classList.toggle("not-displayed");
}

function selectFlashcardSet(){
    let clefIndex = document.getElementById("clef-options").selectedIndex;
    let noteIndex = document.getElementById("note-options").selectedIndex;
    //Clef: 0 = Treble, 1 = Bass
    //Notes: 0 = Both, 1 = Lines, 2 = Spaces
    if (clefIndex === 0) {
        if (noteIndex === 0) {
            flashcards = trebleBoth;
        }
        if (noteIndex === 1) {
            flashcards = trebleLines;
        }
        if (noteIndex === 2) {
            flashcards = trebleSpaces;
        }
    }
    else{
        if (noteIndex === 0) {
            flashcards = bassBoth;
        }
        if (noteIndex === 1) {
            flashcards = bassLines;
        }
        if (noteIndex === 2) {
            flashcards = bassSpaces;
        }
    }
}

function runTimer(){
    //timer mechanics
    let startTime = Date.now();

    // Update the count-down every 1 second
    let x = setInterval(function() {

        // Get today's date and time
        let now = Date.now();

        //Five minutes from now
        let distance = 302000 + startTime - now;

        // Time calculations for days, hours, minutes and seconds
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

        // If the count-down is finished, write "time is up!"
        if (distance < 0) {
            clearInterval(x);
            window.alert('Time is up!');
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}