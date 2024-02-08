import { useEffect, useState } from "react"
import usePosts from "../post/usePosts"

export default function useGetLastTermsOrPrivacyId(type) {

    const { posts } = usePosts({ type }) // terms or privacy are like regular posts

    const [id, idSet] = useState(null)
    useEffect(() => { // get terms or privacy last post id
        idSet(posts?.reverse()?.[0]?._id)
    }, [posts, type])

    return id
}
