import Posts from "../post/Posts"
import FAQ from "./FAQ"

export default function FAQs() {
    return (
        <Posts Post={FAQ} type="faq" className="fc aic" />
    )
}
