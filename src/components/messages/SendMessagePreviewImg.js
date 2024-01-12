export default function SendMessagePreviewImg({ file, className, onClick }) {
    return (
        <img
            src={URL.createObjectURL(file)}
            className={className}
            onClick={onClick}
        />
    )
}
