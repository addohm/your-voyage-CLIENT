import ToolCard from "./ToolCard"
import usePosts from "../post/usePosts"
import parseTextEditorImg from "../textEditor/parseTextEditorImg"
import t from "../../hooks/useT"
import NoPostsYet from "../other/NoPostsYet"

export default function ToolCards({ toolNameClicked, toolCardsHidden }) {

    const { posts } = usePosts({ type: toolNameClicked })

    return (
        toolCardsHidden &&
        <div className="fcc">
            <div className="fcc g30">
                {posts?.map(post => {

                    const img = parseTextEditorImg(post.textEditorValue)

                    return (
                        <ToolCard key={post._id} {...post} img={img} />
                    )
                })}
            </div>
            <NoPostsYet isVisible={posts?.length === 0} />
        </div>
    )
}
