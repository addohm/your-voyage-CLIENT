import { useEffect, useState } from 'react'
import * as api from "./api"

export default function usePostFull(type, id) {

    const [post, postSet] = useState(null)

    useEffect(() => {
        async function getPost() {
            if (!type || !id) return
            const res = await api.getPost(type, id)
            res && postSet(res)
        }

        getPost()
    }, [type, id])

    return (
        { post }
    )
}
