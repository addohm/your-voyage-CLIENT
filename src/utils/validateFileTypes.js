import safeFileTypes from "./safeFileTypes"

export default function validateFileTypes(incomingFiles) {
    let result = []
    Object?.values(incomingFiles)?.forEach(file => {
        if (!file) return
        if (!safeFileTypes.includes(file.name.split('.').pop().toLowerCase())) {
            alert(`Invalid file type. Only ${safeFileTypes.join(', ')} files are allowed.`)
            result.push(false)
        } else {
            result.push(true)
        }
    })

    result = result.every(item => item === true) // if one item is false => return false
    return result
}
