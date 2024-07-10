// Define the texts to be typed
const texts = [
    "uantify",
    "ualify",
    "uestions",
];
  
const contentDiv = document.getElementById('content');

let currentIndex = 0;

const typingSpeed = 100;

function typeText() {
    const currentText = texts[currentIndex];
  
    contentDiv.textContent = '';
  
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < currentText.length) {
        contentDiv.textContent += currentText[i];
        i++;
      } else {
        clearInterval(typeInterval);
          setTimeout(() => {
          currentIndex = (currentIndex + 1) % texts.length;
          typeText();
        }, 1000);
      }
    }, typingSpeed);
}
  
typeText();
