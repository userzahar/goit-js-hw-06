function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxMother = document.getElementById('boxes');
const numberInputWindow = document.querySelector('div#controls > input');
const createBoxButton = document.querySelector('button[data-create]');
const destroyAllBoxButton = document.querySelector('button[data-destroy]');

let boxSize = 20;

createBoxButton.addEventListener('click', createBoxes);
destroyAllBoxButton.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  amount = numberInputWindow.value;
  for (let i = 0; i < amount; i += 1){ 
    boxSize += 10;
    let newBox = document.createElement('div');
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxMother.appendChild(newBox);
  }
}

function destroyBoxes() {
  boxMother.innerHTML = '';
}


