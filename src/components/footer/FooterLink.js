import useGetLastTermsOrPrivacyId from "./useGetLastTermsOrPrivacyId";
import Link2 from "../other/Link2";

export default function FooterLink({ text, type }) { // type: "terms" or "privacy"

    const id = useGetLastTermsOrPrivacyId(type)

    return (
        <Link2 to={`/post/${type}/${id}`}>
            {text}
        </Link2>
    )
}
