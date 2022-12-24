const inputFontSizeControl = document.querySelector("input#font-size-control");
const goodText = document.querySelector("span#text");

inputFontSizeControl.addEventListener('input', onDragMakeFontSize);
function onDragMakeFontSize(event) {
    const value = event.currentTarget.value;
    goodText.style.fontSize = value;
    console.log("🚀 ", goodText);

}
