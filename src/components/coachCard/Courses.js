import usePosts from "../post/usePosts"
import Course from "./Course"

export default function Courses() {

    const { posts } = usePosts({ type: "courses", sort: { order: 1 } })

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
