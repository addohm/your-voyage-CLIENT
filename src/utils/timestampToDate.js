export default function timestampToDate(timestamp) {
    const date = new Date(timestamp)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const lang = localStorage.getItem("lang")
    const formattedDate = date.toLocaleDateString(lang, options);
    return formattedDate // Wednesday, 3 January, 2024
}
