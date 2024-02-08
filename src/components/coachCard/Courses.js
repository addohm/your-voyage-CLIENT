import Posts from "../post/Posts"
import Course from "./Course"

export default function Courses({ isVisible = true, title, wrapClassName }) {
    return (
        isVisible &&
        <Posts Post={Course} type="courses" title={title} wrapClassName={wrapClassName} />
    )
}
