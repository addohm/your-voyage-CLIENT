import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios'

export default function usePosts(type) {

    const [posts, postsSet] = useState([])

    useEffect(() => {
        async function getPosts() {
            if (!type) return
            if (type === "coach") return
            const res = await axios("/getPosts", { type })
            res && postsSet(res)
        }

        getPosts()
    }, [type])

    return (
        [posts, postsSet]
    )
}
