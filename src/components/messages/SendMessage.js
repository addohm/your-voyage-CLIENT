export default function SendMessage({ messageSet, sendMessage }) {
    return (
        <div className="fcc mb20">
            <input onChange={(e) => messageSet(e.target.value)} />
            <button onClick={sendMessage}>send msg</button>
        </div>
    )
}
