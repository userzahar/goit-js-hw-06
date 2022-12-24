function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxMother = document.getElementById('boxes');

function createBoxes(amount) {
  for (let i = 0; i <= amount; i += 1){
    const newBox = document.createElement('div');
    console.log("🚀 ~ file: task-10.js:10 ~ createBoxes ~ newBox", newBox)
    
    const arrayBox = [];
    arrayBox.push(newBox);
    console.log(arrayBox);
    // boxMother.append(newBox)
    newBox.style.width = "30px";
    newBox.style.height = "30px";
    newBox.style.backgroundColor = "#ffa321";
  }
}
createBoxes(2)

