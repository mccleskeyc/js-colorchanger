//check to see if the input from the user is a valid hex color
const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');

hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    if(!isValidHex(hex)) return;
    
    const strippedHex = hex.replace('#', '');
    inputColor.style.backgroundColor = "#" + strippedHex;
})

const isValidHex = (hex) => {
    if(!hex) return false;

    // if there is a #, replace it with an empty string
    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
    }