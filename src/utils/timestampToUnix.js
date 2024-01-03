export default function timestampToUnix(timestamp) {
    const date = new Date(timestamp)
    const unix = Math.floor(date.getTime() / 1000)
    return unix
}
