const text = "I chase away the dark\nwith golden light\nI warm your heart \nfrom morning to night \nThough I set, I promise to\nreturn anew\nWho am I, \nalways shining for you?";
const speed = 80;

let i = 0;
const typingElement = document.getElementById("typing");

function typeText() {
  if (i < text.length) {
    typingElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeText, speed);
  } else {
    typingElement.style.borderRight = "none";
    document.getElementById("input-container").style.display = "block"; // Show input right below message
  }
}

typeText();
