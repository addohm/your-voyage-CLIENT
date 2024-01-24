import usePosts from "../post/usePosts"
import Course from "./Course"

export default function CoachCardApplierCourseList() {

    const { posts } = usePosts("courses")

    return (
        <div className="fcc">
            {posts?.map((course, ind) => {
                return (
                    <Course key={ind} {...course} />
                )
            })}
        </div>
    )
}
