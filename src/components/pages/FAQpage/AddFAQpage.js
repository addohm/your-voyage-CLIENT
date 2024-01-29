import AddManyPosts from "../../addManyPosts/AddManyPosts";
import FAQs from "../../faq/FAQs";
import AddFAQ from "./AddFAQ";

export default function AddFAQpage() {
    return (
        <AddManyPosts
            type="faq"
            addPath="addPosts"
            lastInputName="text"
            addTitle="Add FAQ"
            previewTitle=""
            AddPosts={AddFAQ}
            PreviewPosts={FAQs}
        />
    )
}
