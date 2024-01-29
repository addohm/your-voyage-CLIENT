import Accordion from "../accordion/Accordion"
import Posts from "../post/Posts"
import usePosts from "../post/usePosts"
import FAQ from "./FAQ"

// ! DO NOT DELETE imports 
export default function FAQs() {

    const { posts } = usePosts({ type: "faq" })

    return (
        // UNCOMMENT for 1: "non-closing" FAQs
        // <Posts Post={FAQ} type="faq" className="fc aic" />
        // 2: "closing" FAQs: after each FAQ clicked, previous FAQ will be closed
        <div className="fc aic">
            <div className="title mb15">FAQ:</div>
            <Accordion posts={posts} className="faq" />
        </div>
    )
}
