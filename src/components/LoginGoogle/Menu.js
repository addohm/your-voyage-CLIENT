export default function Menu({ isVisible, children, className }) {
    return (
        isVisible &&
        <div className={`${className} por zi3`}>
            {children}
        </div>
    )
}
