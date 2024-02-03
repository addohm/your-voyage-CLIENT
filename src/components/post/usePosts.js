import { useContext, useEffect, useState } from 'react'
import axios from '../../utils/axios'
import parseForms from '../../utils/parseForms'
import { Context } from '../../Context'
import useAddFile from '../pages/addPosts/useAddFile'

export default function usePosts({ type, sort }) {

    const [posts, postsSet] = useState([])
    const { lang, pastedOrDroppedImg } = useContext(Context)
    const { fileArr } = useAddFile()

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
        // add/edit post
        const forms = parseForms({ e, lastInputName })
        forms.forEach(async (form, formInd) => {
            form.lang = lang // add lang to posts
            // add file: uploaded
            // img = coach profile picture (added on server); img2 = AddCourse picture added here
            const img2 = await fileArr("/upload/siteContent", [pastedOrDroppedImg?.[formInd]])
            await axios(addPath, { ...form, img2: img2?.[0], type })
        })
        setTimeout(() => window.location.reload(), 2000); // ???
    }

    return (
        { posts, postsSet, addOrEditPosts }
    )
}
