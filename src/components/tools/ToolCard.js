import Animation from "../animation/Animation";

export default function ToolCard({ img, title, text }) {
    return (
        <Animation type="opacity">
            <div className="w391 brL">
                <img className="w100p" src={img} />
                <div className="tac">{title}</div>
                <div className="tac">{text}</div>
            </div>
        </Animation>
    )
}
