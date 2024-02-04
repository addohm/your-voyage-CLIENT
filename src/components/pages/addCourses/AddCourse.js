import Input from "../../form/Input"
import InputMUI from "../../form/InputMUI"
import InputMultiline from "../../form/InputMultiline"
import AddCourseImg from "./AddCourseImg"

// * used as AddPosts in AddManyPosts
export default function AddCourse({ courseName, courseDesc, coachEmail, coachName, price, discountPrice, order, courseLabel, courseLabelColor, _id, ind, img2, SaveIcon, DeleteIcon }) {
    return (
        <div key={_id} className="fc g15 w300 bsh brL pl15 pr15 pt15 pb30 bg_white zi2 cardAnim">
            {/* ! _id must be before last input */}
            <input hidden value={_id} name="_id" />
            <div className="f jcsb">
                {SaveIcon}
                {DeleteIcon}
            </div>
            <AddCourseImg ind={ind} img2={img2} />
            <InputMUI required className="fz16" defaultValue={courseName} name="courseName" placeholder="course name" label="course name" />
            <InputMultiline required className="fz16" defaultValue={courseDesc} name="courseDesc" placeholder="course description" label="course description" />
            <InputMUI required type="email" className="fz16" defaultValue={coachEmail} name="coachEmail" placeholder="coach email" label="coach email" />
            <InputMUI required className="fz16" defaultValue={coachName} name="coachName" placeholder="coach name" label="coach name" />
            <InputMUI required type="number" className="fz16" defaultValue={price} name="price" placeholder="price" label="price" />
            <InputMUI type="number" className="fz16" defaultValue={discountPrice} name="discountPrice" placeholder="discount" label="discount" />
            <InputMUI type="number" className="fz16" defaultValue={order || ind + 1} name="order" placeholder="order" label="order" />
            {/* ! add new fields BEFORE last input  */}
            <div className="f fwn g10 aic jcsb">
                <InputMUI className="fz16 w100p" defaultValue={courseLabel} name="courseLabel" placeholder="label" label="label" />
                <Input type="color" className="w30 bn mt28" defaultValue={courseLabelColor} name="courseLabelColor" />
            </div>
        </div>
    )
}
