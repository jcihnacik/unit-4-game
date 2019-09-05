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

$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    currentScore += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#current-score-display").text(currentScore);
    $(".crystal-image").toggleClass("spinning-image");

    if (currentScore === goalNumber) {
        alert("You win!");
        winsCount++;
        currentScore===0;
        $("#current-score-display").text(currentScore);
        $("#wins-count").text(winsCount);
        startGame ();
     
    }

    else if (currentScore >= goalNumber) {
        alert("You lose!!");
        lossesCount++;
        currentScore===0;
        $("#current-score-display").text(currentScore);
        $("losses-count").text(lossesCount);
        startGame ();
        
    }

});

startGame();