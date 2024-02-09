import Accordion from "../accordion/Accordion"
import Posts from "../post/Posts"
import usePosts from "../post/usePosts"
import FAQ from "./FAQ"
import t from "../../hooks/useT"
import NoPostsYet from "../other/NoPostsYet"
// ! DO NOT DELETE imports

export default function FAQs() {

    const { posts } = usePosts({ type: "faq" })

    return (
        // UNCOMMENT for 1: "non-closing" FAQs
        // <Posts Post={FAQ} type="faq" className="fc aic" />
        // 2: "closing" FAQs: after each FAQ clicked, previous FAQ will be closed
        posts?.length > 0 ?
            <>
                <div className="title tac mb30">{t("FAQ")}:</div>
                <div className="fc aic">
                    <Accordion posts={posts} className="bg_white zi2 faq cardAnim" />
                </div>
            </>
            :
            <NoPostsYet isVisible={true} />
    )
}
