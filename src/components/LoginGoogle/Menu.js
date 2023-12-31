export default function Menu({ isVisible, children, className }) {
    return (
        isVisible &&
        <div className={`${className}`}>
            {children}
        </div>
    )
}
