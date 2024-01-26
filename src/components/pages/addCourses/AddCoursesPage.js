import Input from "../../form/Input"
import { Add, Close, Save } from "@mui/icons-material"
import { Button } from "@mui/material"
import usePosts from "../../post/usePosts"
import usePost from "../addPosts/usePost"

export default function AddCoursesPage() {

    const { posts, postsSet, addOrEditPosts } = usePosts({ type: "courses", sort: { order: 1 } })
    const { deletePost } = usePost({ type: "courses" })

    function deleteCourse(ind, _id) {
        postsSet(prev => prev.filter((_, i) => i !== ind))
        deletePost({ id: _id })
    }

    return (
        <form className="fcc g15 m0a" onSubmit={(e) => addOrEditPosts({ e, addPath: "/addCourse" })}>
            <div className="title mb w100p tac">Add Courses</div>
            {Array.from(posts)?.map(({ courseName, coachEmail, coachName, price, discountPrice, order, courseLabel, _id }, ind) => {
                return (
                    <div key={_id} className="fc g15 bsh brL pl15 pr15 pt15 pb30 bg_white zi2 cardAnim">
                        {/* ! _id must be before last input */}
                        <input hidden value={_id} name="_id" />
                        <div className="f jcsb">
                            <Button style={{ margin: 0, padding: 0, minWidth: 0, marginBottom: 5 }} type="submit"><Save className={`${_id ? "brand" : ""}`} /></Button>
                            <Close onClick={() => deleteCourse(ind, _id)} />
                        </div>
                        <Input className="fz16" defaultValue={courseName} name="courseName" placeholder="course name" />
                        <Input className="fz16" defaultValue={coachEmail} name="coachEmail" placeholder="coach email" />
                        <Input className="fz16" defaultValue={coachName} name="coachName" placeholder="coach name" />
                        <Input className="fz16" defaultValue={price} name="price" placeholder="price" />
                        <Input className="fz16" defaultValue={discountPrice} name="discountPrice" placeholder="discount" />
                        <Input className="fz16" defaultValue={order || ind + 1} name="order" placeholder="order" />
                        {/* ! add new fields BEFORE last input  */}
                        <Input className="fz16" defaultValue={courseLabel} name="courseLabel" placeholder="label" />
                        {/* TODO !!! delete course */}
                    </div>
                )
            })}
            <div className="w100p fcc">
                <Add style={{ fontSize: 40 }} onClick={() => postsSet(prev => [...prev, { courseName: "", coachEmail: "", price: "" }])} />
            </div>
        </form>
    )
}
