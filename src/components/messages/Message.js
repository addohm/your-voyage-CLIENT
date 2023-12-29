export default function Message({ msg, msgColor }) {
    return (
        <div
            style={{ background: msgColor }}
            className="wfc p15 mb10 brL"
        >
            {msg}
        </div>
    )
}
