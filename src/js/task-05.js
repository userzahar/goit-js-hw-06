const giveTextInput = document.getElementById("name-input");
const takeTextInput = document.getElementById("name-output");

giveTextInput.addEventListener('input', inputText);


function inputText(event) {
    if (giveTextInput.value === '') takeTextInput.textContent = "Anonymous";
    else takeTextInput.textContent = giveTextInput.value;
}
