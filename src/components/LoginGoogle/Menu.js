export default function Menu({ isVisible, children }) {
    return (
        isVisible &&
        <div className="poa w100p bg_white py15 brL">
            {children}
        </div>
    )
}
