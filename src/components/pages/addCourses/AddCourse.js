import Input from "../../form/Input"
import InputMUI from "../../form/InputMUI"

// * used as AddPosts in AddManyPosts
export default function AddCourse({ courseName, coachEmail, coachName, price, discountPrice, order, courseLabel, courseLabelColor, _id, ind, SaveIcon, DeleteIcon }) {
    return (
        <div key={_id} className="fc g15 w300 bsh brL pl15 pr15 pt15 pb30 bg_white zi2 cardAnim">
            {/* ! _id must be before last input */}
            <input hidden value={_id} name="_id" />
            <div className="f jcsb">
                {SaveIcon}
                {DeleteIcon}
            </div>
            <InputMUI required className="fz16" defaultValue={courseName} name="courseName" placeholder="course name" label="course name" />
            <InputMUI required className="fz16" defaultValue={coachEmail} name="coachEmail" placeholder="coach email" label="coach email" />
            <InputMUI required className="fz16" defaultValue={coachName} name="coachName" placeholder="coach name" label="coach name" />
            <InputMUI required className="fz16" defaultValue={price} name="price" placeholder="price" label="price" />
            <InputMUI className="fz16" defaultValue={discountPrice} name="discountPrice" placeholder="discount" label="discount" />
            <InputMUI className="fz16" defaultValue={order || ind + 1} name="order" placeholder="order" label="order" />
            {/* ! add new fields BEFORE last input  */}
            <div className="f fwn g10 aic jcsb">
                <InputMUI className="fz16 w100p" defaultValue={courseLabel} name="courseLabel" placeholder="label" label="label" />
                <Input type="color" className="w30 bn mt28" defaultValue={courseLabelColor} name="courseLabelColor" />
            </div>
        </div>
    )
}
