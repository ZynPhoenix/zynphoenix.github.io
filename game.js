const secretWords = ["sun", "sunshine"]; // multiple allowed answers

function checkWord() {
  const userInput = document.getElementById("userInput").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  // Check if userInput matches any word in the array
  if (secretWords.includes(userInput)) {
    window.location.href = "month.html"; // correct answer
  } else {
    feedback.textContent = "Wrong word! Try again, Babe";
  }
}

// Optional: Press Enter to submit
document.getElementById("userInput").addEventListener("keydown", function(e){
  if (e.key === "Enter") checkWord();
});
