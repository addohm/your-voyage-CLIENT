import usePosts from "../post/usePosts"

export default function Posts({
    Post,
    type,
    sort = { order: 1 },
    className = "fcc"
}) {

    const { posts } = usePosts({ type, sort })

    return (
        <div className={className}>
            {posts?.map((post, ind) => {
                return (
                    <Post key={post?._id} {...post} ind={ind} />
                )
            })}
        </div>
    )
}