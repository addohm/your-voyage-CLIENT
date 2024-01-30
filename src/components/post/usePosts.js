import { useContext, useEffect, useState } from 'react'
import axios from '../../utils/axios'
import parseForms from '../../utils/parseForms'
import { Context } from '../../Context'

export default function usePosts({ type, sort }) {

    const [posts, postsSet] = useState([])
    const { lang } = useContext(Context)

    useEffect(() => {
        async function getPosts() {
            if (!type) return
            if (type === "coach") return
            const res = await axios("/getPosts", { type, sort, lang })
            res && postsSet(res)
        }

        getPosts()
    }, [type, lang])

    async function addOrEditPosts({ e, addPath, lastInputName }) {
        e.preventDefault()
        // add file: pasted/dropped
        // ! await fileArr("/upload/siteContent", pastedOrDroppedImg)
        // add/edit post
        const forms = parseForms({ e, lastInputName })
        forms.forEach(async (form) => {
            form.lang = lang // add lang to posts
            const res = await axios(addPath, { ...form, type })
        })
        setTimeout(() => window.location.reload(), 2000); // ???
    }

    return (
        { posts, postsSet, addOrEditPosts }
    )
}
