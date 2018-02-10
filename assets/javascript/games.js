//initialize variables
  
var crystal1 = 0;
var crystal3 = 0;
var crystal4 = 0;
var computerRandomNumber = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;
  
 // start the game
 function startGame() {
  totalScore=0;
    $("#totalScore").html(totalScore);
    computerRandomNumber = Math.floor((Math.random() * 101) + 19);
   	$("#computerGuess").html(computerRandomNumber);

//randomly generate a number for crystals
  crystal1 = Math.floor((Math.random() * 12) + 1);
  crystal2 = Math.floor((Math.random() * 12) + 1);
  crystal3 = Math.floor((Math.random() * 12) + 1);
  crystal4 = Math.floor((Math.random() * 12) + 1);
 }

//check for win or loss and add 1 to the appropriate counter and write the webpage
function checkWinLoss() {
  if (totalScore > computerRandomNumber) {
    losses++;
    $("#losses").html("Losses: " + losses);
    startGame();
  }
  else if (totalScore === computerRandomNumber) {
    wins++;
    $("#wins").html("Wins: " + wins);
    startGame();
  }
}

startGame();

//set up on click add crystal points to total score

$(".img-thumbnail").on("click", function() {
  if ($(this).attr("class") === "img-thumbnail") {
    if ($(this).attr("id") === "crystal1") {
      totalScore = totalScore + crystal1;
      $("#totalScore").html(crystal1);
    }
  
    if ($(this).attr("id") === "crystal2") {
      totalScore = totalScore + crystal2;
      $("#totalScore").html(crystal2);
    }
           
    if ($(this).attr("id") === "crystal3") {
      totalScore = totalScore + crystal3;
      $("#totalScore").html(crystal3);
    }

    if ($(this).attr("id") === "crystal4") {
      totalScore = totalScore + crystal4;
      $("#totalScore").html(crystal4);
    }
    $("#totalScore").html(totalScore);
  }
   checkWinLoss();
});

