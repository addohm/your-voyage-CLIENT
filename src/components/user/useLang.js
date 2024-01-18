import { useEffect, useState } from "react"

export default function useLang() {

    const [lang, langSet] = useState([])

    useEffect(() => {
        langSet(localStorage.getItem("lang"))
    }, [])

    return { lang, langSet }
}
