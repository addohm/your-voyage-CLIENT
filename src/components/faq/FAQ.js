import Accordion from "../accordion/Accordion";
import "./index.scss";

export default function FAQ({ title, text }) {
    return (
        <Accordion title={title} text={text} className="bg_white zi2 faq" />
    )
}
