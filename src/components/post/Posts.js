import Loading from "../other/Loading"
import NoPostsYet from "../other/NoPostsYet"
import usePosts from "../post/usePosts"

export default function Posts({
    Post,
    type,
    sort = { order: 1 },
    className = "fcc",
    title,
    wrapClassName
}) {

    const { posts, isLoading } = usePosts({ type, sort })

    return (
        <Loading isLoading={isLoading} >
            {posts.length > 0
                ?
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
                :
                <NoPostsYet isVisible={true} />
            }
        </Loading>
    )
}