var goalNumber;
var fourthCrystalValue = [33, 36, 39, 42, 45];
var thirdCrystalValue = [30, 27, 24, 21];
var secondCrystalValue = [18, 15, 12];
var firstCrystalValue = [9, 6, 3, 1];
var currentScore = 0;
var winsCount = 0;
var lossesCount = 0;



function startGame() {
    currentScore = 0;
    goalNumber = Math.floor(Math.random() * ((330 - 3) + 1) + 3);
    if (goalNumber % 3) {
        startGame(330, 3);
    }
    console.log("The current goal number is " + goalNumber);
    $("#current-goal-display").text(goalNumber);


    firstCrystalValue = firstCrystalValue[Math.floor(Math.random() * firstCrystalValue.length)];
    secondCrystalValue = secondCrystalValue[Math.floor(Math.random() * secondCrystalValue.length)];
    thirdCrystalValue = thirdCrystalValue[Math.floor(Math.random() * thirdCrystalValue.length)];
    fourthCrystalValue = fourthCrystalValue[Math.floor(Math.random() * fourthCrystalValue.length)];


    $("#crystal1").attr("data-crystalvalue", firstCrystalValue);
    $("#crystal2").attr("data-crystalvalue", secondCrystalValue);
    $("#crystal3").attr("data-crystalvalue", thirdCrystalValue);
    $("#crystal4").attr("data-crystalvalue", fourthCrystalValue);

    console.log("The first crystal's value is " + firstCrystalValue);

}
function gameWinner() {
    alert("You win!");
    winsCount++;
    $("#wins-count").text(winsCount);
    currentScore = 0;
    $("#current-score-display").text(currentScore);
    startGame();
}

function gameLoser() {
    alert("You lose!!");
    lossesCount++;
    $("losses-count").text(lossesCount);
    currentScore = 0;
    $("#current-score-display").text(currentScore);
    startGame();
}

$(".crystal-image").on("click", function () {



    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    currentScore += crystalValue;

    $("#current-score-display").text(currentScore);
    $(".crystal-image").toggleClass("spinning-image");

    if (currentScore === goalNumber) {
        gameWinner();

    }

    else if (currentScore >= goalNumber) {
        gameLoser();
        

    }

});

startGame();