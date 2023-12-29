export default function getMsgColor(msgEmail, curUserEmail) {
    let msgColor
    msgEmail === curUserEmail ? msgColor = "#969cfa" : msgColor = "#ff9b82"
    return msgColor
}