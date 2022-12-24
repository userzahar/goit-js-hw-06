const input = document.getElementById('validation-input');
const minSymbol = input.dataset.length;

input.addEventListener('blur', checkInputText);

function checkInputText(event) {
    const textLength = event.currentTarget.value.length;
    
    if (textLength < minSymbol)
    {
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
    else {
        this.classList.add("valid");
        this.classList.remove("invalid")
    };
}