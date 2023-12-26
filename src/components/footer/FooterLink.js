import { Link } from "react-router-dom";
import usePosts from "../post/usePosts";

export default function FooterLink({ text, type }) { // type: "terms" or "privacy"

    const [termsOrPrivacy] = usePosts(type) // terms or privacy are like regular posts
    const id = termsOrPrivacy?.reverse()?.[0]?._id // get terms or privacy last post id

    return (
        <Link to={`${type}/${id}`}>
            {text}
        </Link>
    )
}
