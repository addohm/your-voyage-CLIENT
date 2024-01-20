export default function genFirstCharColor(str) {

    // Get the first character of the input
    const firstChar = str.charAt(0);

    // Generate color based on ASCII code of the first character
    const asciiCode = firstChar.charCodeAt(0);

    // Calculate RGB values using a more varied algorithm
    const red = (asciiCode * 17) % 255;
    const green = (asciiCode * 31) % 255;
    const blue = (asciiCode * 47) % 255;

    // Combine RGB values into a CSS color
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}