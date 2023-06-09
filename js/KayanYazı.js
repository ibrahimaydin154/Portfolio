let textContainer = document.getElementById('text-container');
let texts = ['Web Developer', 'Software Engineer', 'Frontend Developer'];
let currentIndex = 0;
let delay = 100;
let currentText = '';
let isDeleting = false;
let charIndex = 0;

function changeText() {
  if (!isDeleting && charIndex <= texts[currentIndex].length) {
    currentText = texts[currentIndex].substring(0, charIndex);
    charIndex++;
  }

  if (isDeleting && charIndex >= 0) {
    currentText = texts[currentIndex].substring(0, charIndex);
    charIndex--;
  }

  textContainer.textContent = currentText;

  if (!isDeleting && charIndex === texts[currentIndex].length + 1) {
    isDeleting = true;
    delay = 100;
  }

  if (isDeleting && charIndex === -1) {
    isDeleting = false;
    currentIndex++;
    if (currentIndex >= texts.length) {
      currentIndex = 0;
    }
    delay = 100;
  }

  setTimeout(changeText, delay);
}

changeText();