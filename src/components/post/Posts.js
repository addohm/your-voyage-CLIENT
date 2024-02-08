import usePosts from "../post/usePosts"

export default function Posts({
    Post,
    type,
    sort = { order: 1 },
    className = "fcc",
    title,
    wrapClassName
}) {

    const { posts } = usePosts({ type, sort })

    return (
        posts.length > 0 &&
        <div className={wrapClassName}>
            {title}
            <div className={className}>
                {posts?.map((post, ind) => {
                    return (
                        <Post key={post?._id} {...post} ind={ind} />
                    )
                })}
            </div>
        </div>
    )
}