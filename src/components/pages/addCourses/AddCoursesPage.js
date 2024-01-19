import Input from "../../form/Input"
import { Add, Close, Save } from "@mui/icons-material"
import usePost from "../addPosts/usePost"
import { Button } from "@mui/material"
import usePosts from "../../post/usePosts"

export default function AddCoursesPage() {

    const [courses, coursesSet] = usePosts("courses")
    const { addOrEditPost } = usePost({ addPath: "/addCourse", type: "courses", onDoneNavigateToPost: false, onDone: () => window.location.reload() })

    return (
        <div className="fcc g15 maw900 m0a">
        <div className="title mb">Add Courses</div>
            {Array.from(courses)?.map(({ courseName, coachEmail, price, _id }, ind) => {
                return (
                    <form key={_id} className="fcc g15" onSubmit={(e) => addOrEditPost(e, _id)}>
                        <Button type="submit"><Save className={`${_id ? "brand" : ""}`} /></Button>
                        <Input className="fz16" defaultValue={courseName} name="courseName" placeholder="course name" />
                        <Input className="fz16" defaultValue={coachEmail} name="coachEmail" placeholder="coach email" />
                        <Input className="fz16" defaultValue={price} name="price" placeholder="price" />
                        {/* TODO !!! delete course */}
                        <Close onClick={() => coursesSet(prev => prev.filter((_, i) => i !== ind))} />
                    </form>
                )
            })}
            <div className="w100p fcc">
                <Add style={{ fontSize: 40 }} onClick={() => coursesSet(prev => [...prev, { courseName: "", coachEmail: "", price: "" }])} />
            </div>
        </div>
    )
}
