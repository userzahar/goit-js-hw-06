function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetButton = document.querySelector('.change-color');
const widgetTextColor = document.querySelector('.color');
const body = document.querySelector('body');

widgetButton.addEventListener('click', changeBodyBackgroundColor);

function changeBodyBackgroundColor(event) {
  widgetTextColor.textContent = getRandomHexColor();
  body.style.backgroundColor = widgetTextColor.textContent;
}



