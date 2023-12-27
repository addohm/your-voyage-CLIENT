import usePosts from "../post/usePosts"

export default function useGetLastTermsOrPrivacyId(type) {

    const [termsOrPrivacy] = usePosts(type) // terms or privacy are like regular posts
    const id = termsOrPrivacy?.reverse()?.[0]?._id // get terms or privacy last post id

    return id
}
