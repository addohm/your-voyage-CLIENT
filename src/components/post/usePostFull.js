import { useEffect, useState } from 'react'
import axios from '../../utils/axios'
import { useNavigate } from 'react-router-dom'
import { MAIN_ROUTE } from '../../utils/consts'

export default function usePostFull(type, id) {

    const [post, postSet] = useState(null)
    const [isLoading, isLoadingSet] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function getPost() {
            if (!type || !id || id === "undefined") return
            const res = await axios("/getPost", { type, _id: id })
            res ? postSet(res) : navigate(MAIN_ROUTE) // if post not found => redirect
            isLoadingSet(false)
        }

        getPost()
    }, [type, id])

    return (
        { post, isLoading }
    )
}
