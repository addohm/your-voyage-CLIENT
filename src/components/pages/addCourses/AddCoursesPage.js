import { useState } from "react"
import Input from "../../form/Input"
import { Add, Close, Save } from "@mui/icons-material"
import usePost from "../addPosts/usePost"
import { Button } from "@mui/material"
import usePosts from "../../post/usePosts"

export default function AddCoursesPage() {

    const [courses, coursesSet] = usePosts("courses")
    const { addOrEditPost } = usePost({ type: "courses", onDoneNavigateToPost: false, onDone: () => window.location.reload() })

    return (
        <div className="fcc g15 maw700 m0a">
            {Array.from(courses)?.map(({ courseName, coachEmail, price, _id }, ind) => {
                return (
                    <form key={_id} className="fcc g15" onSubmit={(e) => addOrEditPost(e, _id)}>
                        <Button type="submit"><Save className={`${_id ? "brand" : ""}`} /></Button>
                        <Input defaultValue={courseName} name="courseName" placeholder="course name" />
                        <Input defaultValue={coachEmail} name="coachEmail" placeholder="coach email" />
                        <Input defaultValue={price} name="price" placeholder="price" />
                        {/* TODO !!! delete course */}
                        <Close onClick={() => coursesSet(prev => prev.filter((_, i) => i !== ind))} />
                    </form>
                )
            })}
            <div className="w100p fcc">
                <Add onClick={() => coursesSet(prev => [...prev, { courseName: "", coachEmail: "", price: "" }])} />
            </div>
        </div>
    )
}
