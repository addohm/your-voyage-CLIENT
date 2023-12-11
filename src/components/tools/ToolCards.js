import ToolCard from "./ToolCard"
import usePosts from "../post/usePosts"
import parseTextEditorImg from "../textEditor/parseTextEditorImg"

export default function ToolCards({ toolNameClicked, toolCardsHidden }) {

    const [posts, postsSet] = usePosts(toolNameClicked)

    return (
        toolCardsHidden &&
        <div className="fcc">
            <div className="fcc g30">
                {posts?.map(post => {

                    const img = parseTextEditorImg(post.textEditorValue)

                    return (
                        <ToolCard {...post} img={img} />
                    )
                })}
            </div>
        </div>
    )
}
