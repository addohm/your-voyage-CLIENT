export default function timestampToDate(timestamp) {
    const date = new Date(timestamp)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate // Wednesday, 3 January, 2024
}
