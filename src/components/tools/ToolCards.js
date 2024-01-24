import ToolCard from "./ToolCard"
import usePosts from "../post/usePosts"
import parseTextEditorImg from "../textEditor/parseTextEditorImg"

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
            {posts?.length === 0 && <div className="title2 w100p tac mt">No posts yet...</div>}
        </div>
    )
}
