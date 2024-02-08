import { Instagram, LinkedIn, YouTube } from "@mui/icons-material";

// * to hide change isVisible to false
export default function FooterSocialLinks({ isVisible = true }) {
    return (
        isVisible &&
        <div className="fcc w100p opAnim10">
            <div className='f fwn jcsb w100'>
                <Instagram />
                <YouTube />
                <LinkedIn />
            </div>
        </div>
    )
}
