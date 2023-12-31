import { useEffect, useState } from 'react'
import axios from '../../utils/axios'

export default function usePostFull(type, id) {

    const [post, postSet] = useState(null)

    useEffect(() => {
        async function getPost() {
            if (!type || !id) return
            const res = await axios("/getPost", { type, id })
            res && postSet(res)
        }

        getPost()
    }, [type, id])

    return (
        { post }
    )
}
