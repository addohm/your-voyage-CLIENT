import Input from "../../form/Input"
import { Add, Close, Save } from "@mui/icons-material"
import usePost from "../addPosts/usePost"
import { Button } from "@mui/material"
import usePosts from "../../post/usePosts"

export default function AddCoursesPage() {

    const [courses, coursesSet] = usePosts("courses")
    const { addOrEditPost } = usePost({ addPath: "/addCourse", type: "courses", onDoneNavigateToPost: false, onDone: () => window.location.reload() })

    return (
        <div className="fcc g15 m0a">
            <div className="title mb w100p tac">Add Courses</div>
            {Array.from(courses)?.map(({ courseName, coachEmail, coachName, price, discountPrice, _id }, ind) => {
                return (
                    <form key={_id} className="fcc g15" onSubmit={(e) => addOrEditPost(e, _id)}>
                        <Button type="submit"><Save className={`${_id ? "brand" : ""}`} /></Button>
                        <Input className="fz16" defaultValue={courseName} name="courseName" placeholder="course name" />
                        <Input className="fz16" defaultValue={coachEmail} name="coachEmail" placeholder="coach email" />
                        <Input className="fz16" defaultValue={coachName} name="coachName" placeholder="coach name" />
                        <Input className="fz16" defaultValue={price} name="price" placeholder="price" />
                        <Input className="fz16" defaultValue={discountPrice} name="discountPrice" placeholder="discount price" />
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
