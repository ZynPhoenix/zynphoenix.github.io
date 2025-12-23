const text = "Happy 1st monthsary, babe! I just want to tell you that you’re the best plot twist of my 2025. I never thought that our simple asaran would lead to something meaningful and worth living. I want to love you—the kind of love that can make you deaf, deaf to other people’s opinions. I know the start of our relationship was tough, magulo, and mahirap. \nThere were times when we both doubted each other, hesitant to continue our connection, but after all that, we still ran to each other. There were times when our past versions still bothered us, to the point that it hurt both of us. Sometimes, the past still haunts us. There are a lot of people against us, but I want to assure you that in every storm, hurricane, tornado, or earthquake that comes our way, I will always stand by your side. In the end of those instances, I’ll always be your sunshine—keeping you warm during the rain and drying you after it passes. \nThe moon is always beautiful, my love. I will always love you, no matter what.\n\n\n - Sunshine";
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
    //document.getElementById("input-container").style.display = "block"; // Show input right below message
  }
}

typeText();
