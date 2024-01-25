import { Instagram, LinkedIn, YouTube } from "@mui/icons-material";

// * to hide change isVisible to false
export default function FooterSocialLinks({ isVisible = true }) {
    return (
        isVisible &&
        <div className='f jcsb w100'>
            <Instagram />
            <YouTube />
            <LinkedIn />
        </div>
    )
}
