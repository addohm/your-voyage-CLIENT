import ToolCard from "./ToolCard"

export default function ToolCards({ toolNameClicked, toolCardsHidden }) {

    const fakePosts = [
        {
            img: "https://placehold.co/600x400",
            title: "title 1",
            text: "text 1",
        },
        {
            img: "https://placehold.co/600x400",
            title: "title 2",
            text: "text 2",
        },
        {
            img: "https://placehold.co/600x400",
            title: "title 3",
            text: "text 3",
        },
        {
            img: "https://placehold.co/600x400",
            title: "title 4",
            text: "text 4",
        },
    ]

    return (
        toolCardsHidden &&
        <div className="fcc">
            <div className="fcc g30">
                {fakePosts.map(post => (
                    <ToolCard {...post} />
                ))}
            </div>
        </div>
    )
}
