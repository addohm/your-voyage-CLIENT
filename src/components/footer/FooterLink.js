import { Link } from "react-router-dom";
import useGetLastTermsOrPrivacyId from "./useGetLastTermsOrPrivacyId";

export default function FooterLink({ text, type }) { // type: "terms" or "privacy"

    const id = useGetLastTermsOrPrivacyId(type)

    return (
        <Link to={`/post/${type}/${id}`}>
            {text}
        </Link>
    )
}
