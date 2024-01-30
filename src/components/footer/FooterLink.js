import useGetLastTermsOrPrivacyId from "./useGetLastTermsOrPrivacyId";
import Link2 from "../other/Link2";

export default function FooterLink({ text, type }) { // type: "terms" or "privacy"

    const id = useGetLastTermsOrPrivacyId(type)

    return (
        id && // if terms or privacy exist
        <Link2 to={`/post/${type}/${id}`}>
            {text}
        </Link2>
    )
}
