import Posts from "../post/Posts"
import Course from "./Course"

export default function Courses() {
    return (
        <Posts Post={Course} type="courses" />
    )
}
