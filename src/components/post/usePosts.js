import { useEffect, useState } from 'react'
import axios from '../../utils/axios'
import parseForms from '../../utils/parseForms'

export default function usePosts({ type, sort }) {

    const [posts, postsSet] = useState([])

    useEffect(() => {
        async function getPosts() {
            if (!type) return
            if (type === "coach") return
            const res = await axios("/getPosts", { type, sort })
            res && postsSet(res)
        }

        getPosts()
    }, [type])

    async function addOrEditPosts({ e, addPath, lastInputName }) {
        e.preventDefault()
        // add file: pasted/dropped
        // ! await fileArr("/upload/siteContent", pastedOrDroppedImg)
        // add/edit post
        const forms = parseForms({ e, lastInputName })
        forms.forEach(async (form) => {
            const res = await axios(addPath, { ...form, type })
        })
        setTimeout(() => window.location.reload(), 2000); // ???
    }

    return (
        { posts, postsSet, addOrEditPosts }
    )
}
