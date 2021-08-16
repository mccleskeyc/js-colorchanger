//check to see if the input from the user is a valid hex color
const isValidHex = (hex) => {
    if(!hex) return false;

    // if there is a #, replace it with an empty string
    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
    }