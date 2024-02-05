import Posts from "../post/Posts"
import Course from "./Course"

export default function Courses({ isVisible = true, className }) {
    return (
        isVisible &&
        <div className={className || ""}>
            <Posts Post={Course} type="courses" />
        </div>
    )
}
