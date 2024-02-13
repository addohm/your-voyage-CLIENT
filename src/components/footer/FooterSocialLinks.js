import { Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";

// * to hide change isVisible to false
export default function FooterSocialLinks({ isVisible = true }) {

    const instagramLink = "https://www.instagram.com"
    const youtubeLink = "https://www.youtube.com"
    const linkedinLink = "https://www.linkedin.com"

    return (
        isVisible &&
        <div className="fcc w100p opAnim10">
            <div className='f fwn jcsb w100'>
                <Link to={instagramLink}>
                    <Instagram />
                </Link>
                <Link to={youtubeLink}>
                    <YouTube />
                </Link>
                <Link to={linkedinLink}>
                    <LinkedIn />
                </Link>
            </div>
        </div>
    )
}
