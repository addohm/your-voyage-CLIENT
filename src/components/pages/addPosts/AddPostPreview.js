import { useContext, useEffect } from "react";
import PostFull from "../../post/PostFull";
import { Context } from "../../../Context";

export default function AddPostPreview({ type, id, value, title, link, className }) {

    // change AddPostPreview's PostFull Markdown imgs' src to context pastedOrDroppedImg
    const { pastedOrDroppedImg } = useContext(Context)
    useEffect(() => {
        pastedOrDroppedImg?.map(img => {
            document.querySelector(".postFull").querySelectorAll("img").forEach(each => {
                // text after last slash
                if (each.src.match(/(.*)\/([^/]*)$/)[2] === img.name) {
                    each.src = URL.createObjectURL(img)
                }
            })
        })
    }, [pastedOrDroppedImg, value])

    return (
        <div className={`${className}`}>
            <div className="title tac mb">Post Preview</div>
            <div className={`bd brL p`}>
                <PostFull type={type} id={id} value={value} title={title} link={link} isVisibleIcons={false} />
            </div>
        </div>
    )
}
