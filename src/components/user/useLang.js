import { useEffect, useState } from "react"

export default function useLang() {

    const [lang, langSet] = useState([])

    useEffect(() => {
        // set default lang from browser
        if (!localStorage.getItem("lang")) {
            const preferredLang = (navigator.language || navigator.userLanguage).replace(/-.*/, '')
            localStorage.setItem("lang", preferredLang);
        }

        langSet(localStorage.getItem("lang"))
    }, [])

    return { lang, langSet }
}
