import Input from "../../form/Input"
import { Add, Close, Save } from "@mui/icons-material"
import { Button } from "@mui/material"
import usePosts from "../../post/usePosts"

export default function AddCoursesPage() {

    const { posts, postsSet, addOrEditPosts } = usePosts({ type: "courses" })

    return (
        <form className="fcc g15 m0a" onSubmit={(e) => addOrEditPosts({ e, addPath: "/addCourse" })}>
            <div className="title mb w100p tac">Add Courses</div>
            {Array.from(posts)?.map(({ courseName, coachEmail, coachName, price, discountPrice, order, courseLabel, _id }, ind) => {
                return (
                    <div key={_id} className="fcc g15">
                        {/* ! _id must be before last input */}
                        <input hidden value={_id} name="_id" />
                        <Button type="submit"><Save className={`${_id ? "brand" : ""}`} /></Button>
                        <Input className="fz16" defaultValue={courseName} name="courseName" placeholder="course name" />
                        <Input className="fz16" defaultValue={coachEmail} name="coachEmail" placeholder="coach email" />
                        <Input className="fz16" defaultValue={coachName} name="coachName" placeholder="coach name" />
                        <Input className="fz16 w80" defaultValue={price} name="price" placeholder="price" />
                        <Input className="fz16 w80" defaultValue={discountPrice} name="discountPrice" placeholder="discount" />
                        <Input className="fz16 w80" defaultValue={order} name="order" placeholder="order" />
                        {/* ! add new fields BEFORE last input  */}
                        <Input className="fz16 w80" defaultValue={courseLabel} name="courseLabel" placeholder="label" />
                        {/* TODO !!! delete course */}
                        <Close onClick={() => postsSet(prev => prev.filter((_, i) => i !== ind))} />
                    </div>
                )
            })}
            <div className="w100p fcc">
                <Add style={{ fontSize: 40 }} onClick={() => postsSet(prev => [...prev, { courseName: "", coachEmail: "", price: "" }])} />
            </div>
        </form>
    )
}
