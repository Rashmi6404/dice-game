// Function to generate random number for dice
function random_no() {
    return Math.floor(Math.random() * 6 + 1);
  }
  
  // Function to play the game
  function playGame() {
    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");
  
    var a = random_no();
    var b = random_no();
  
    img1.setAttribute("src", "./images/dice" + a + ".png");
    img2.setAttribute("src", "./images/dice" + b + ".png");
  
    // Determine the winner
    var msg;
    if (a > b) {
      msg = "Player 1 wins!! 🎉";
    } else if (a < b) {
      msg = "Player 2 wins!! 🎉";
    } else {
      msg = "It's a Draw! 🤝";
    }
  
    // Update the heading with the result
    document.querySelector("h1").textContent = msg;
  }
  
  // Add event listener to the button
  document.querySelector(".throw-button").addEventListener("click", playGame);
  