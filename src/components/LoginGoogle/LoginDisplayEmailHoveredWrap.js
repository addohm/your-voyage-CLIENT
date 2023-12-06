export default function LoginDisplayEmailHoveredWrap({ user, isUserEmailHovered, children }) {
    return (
        user && isUserEmailHovered &&
        <div className="poa w100p bg_white py15 brL">
            {children}
        </div>
    )
}
