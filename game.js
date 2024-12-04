//Step 2 - Create A New Pattern:

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  //Step 3 - Show the Sequence to the User with Animations and Sounds:

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  $("button").on("click", function () {
    var userChosenColour = $(this).text();
  });
}

//Step 4 - Check Which Button is Pressed:

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  //console.log(userClickedPattern);
});
