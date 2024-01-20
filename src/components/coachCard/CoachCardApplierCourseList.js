import usePosts from "../post/usePosts"
import Course from "./Course"

export default function CoachCardApplierCourseList() {

    const [courses] = usePosts("courses")

    return (
        <div className="fcc">
            {courses?.map((course, ind) => {
                return (
                    <Course key={ind} {...course} />
                )
            })}
        </div>
    )
}
