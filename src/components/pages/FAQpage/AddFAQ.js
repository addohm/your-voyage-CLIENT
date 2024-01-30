import Input from "../../form/Input";
import InputMUI from "../../form/InputMUI";

// * used as AddPosts in AddManyPosts
export default function AddFAQ({ _id, title, text, SaveIcon, DeleteIcon }) {
    return (
        <div className="bg_white zi2 faq">
            <div className="f jcsb">
                {SaveIcon}
                {DeleteIcon}
            </div>
            <input hidden value={_id} name="_id" />
            <div className="fc">
                <Input required className="fz16" defaultValue={title} name="title" placeholder="title" />
                <InputMUI required multiline className="fz16" defaultValue={text} name="text" placeholder="text" />
            </div>
        </div>
    )
}
