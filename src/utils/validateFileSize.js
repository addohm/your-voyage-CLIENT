export default function validateFileSize(incomingFiles) {

    const MAX_FILE_SIZE_MB = 5

    let result = []
    Object?.values(incomingFiles)?.forEach(file => {
        if (!file) return
        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
            alert(`File size should be less than ${MAX_FILE_SIZE_MB} MB.`)
            result.push(false)
        } else {
            result.push(true)
        }
    })

    result = result.every(item => item === true) // if one item is false => return false
    return result
}
