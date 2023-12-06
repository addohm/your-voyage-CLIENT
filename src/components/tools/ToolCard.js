import Animation from "../animation/Animation";

export default function ToolCard({ img, title, textEditorValue }) {
    return (
        <Animation type="opacity">
            <div className="w391 brL">
                <img className="w100p" src={img} />
                <div className="tac">{title}</div>
                <div className="tac">{textEditorValue}</div>
            </div>
        </Animation>
    )
}
