export default function LoginTitle({ user, title }) {
    return (
        !user &&
        <div className="title tac mb">{title}</div>
    )
}
