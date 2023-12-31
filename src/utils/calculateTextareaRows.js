export default function calculateTextareaRows(content) {
    // Calculate the number of rows based on the content's height
    const lineHeight = 16; // Adjust this based on your font size and line height
    const minRows = 1; // Minimum number of rows
    const calculatedRows = Math.max(
        minRows,
        Math.ceil(content.split('\n').length * lineHeight / 2) // Divide by 2 for better accuracy
    );

    return calculatedRows;
};