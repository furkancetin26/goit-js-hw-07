const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');
button.addEventListener('click', function () {
    function getRandomHexColor() {
        hexColor = `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
        color.textContent = hexColor;  
        body.style.backgroundColor = hexColor;   
      }
      getRandomHexColor();
  })