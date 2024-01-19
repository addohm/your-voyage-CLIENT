import { useEffect, useState } from "react"

export default function useLang() {

    const [lang, langSet] = useState([])

    useEffect(() => {
        // set default lang from browser
        if (!localStorage.getItem("lang")) {
            let preferredLang = (navigator.language || navigator.userLanguage).replace(/-.*/, '')
            const availableLangs = ["en", "ch"]
            preferredLang = availableLangs.includes(preferredLang) ? preferredLang : "en"
            localStorage.setItem("lang", preferredLang);
        }

        langSet(localStorage.getItem("lang"))
    }, [])

    return { lang, langSet }
}
