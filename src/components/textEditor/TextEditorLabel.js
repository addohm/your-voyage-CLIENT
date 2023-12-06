export default function TextEditorLabel({ label, valueLength, className }) {
    return (
        label &&
        <div
            className={`w100 gray fw500 ${valueLength === 0 ? "fz16" : "fz12"} ${className}`}
            style={{ fontFamily: 'Noto Sans' }}
        >
            {label}
        </div>
    )
}
