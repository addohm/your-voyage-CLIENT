import { useContext } from "react";
import AddManyPosts from "../../addManyPosts/AddManyPosts";
import FAQs from "../../faq/FAQs";
import AddFAQ from "./AddFAQ";
import { Context } from "../../../Context";

export default function AddFAQpage() {

    const { lang } = useContext(Context)

    return (
        <AddManyPosts
            type="faq"
            addPath="addPosts"
            lastInputName="text"
            addTitle={`Add FAQ (${lang.toUpperCase()})`}
            previewTitle="FAQ Preview"
            AddPosts={AddFAQ}
            PreviewPosts={FAQs}
        />
    )
}
