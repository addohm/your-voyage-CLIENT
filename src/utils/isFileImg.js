export default function isFileImg(fileName) {
    const fileExtension = fileName?.match(/[^.]+$/)[0] // text after last .
    const imgExtensions = ["jpeg", "jpg", "png", "gif", "bmp", "tiff", "tif", "psd", "eps", "svg", "webp", "heif", "heic", "jfif", "jfi", "jpe", "jpf", "jpx", "jp2", "j2k", "jpc", "pgf", "raf", "raw", "cr2", "nef", "orf", "arw", "srf", "sr2", "dng"]
    return imgExtensions?.includes(fileExtension)
}