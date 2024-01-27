import { useEffect, useState } from "react"

export default function useLang() {

    const [lang, langSet] = useState([])

    useEffect(() => {
        const availableLangs = ["en", "zh"]
        // NO LANG SELECTED AT ALL => set default lang from browser
        if (!localStorage.getItem("lang")) {
            let preferredLang = (navigator.language || navigator.userLanguage).replace(/-.*/, '')
            preferredLang = availableLangs.includes(preferredLang) ? preferredLang : "en"
            localStorage.setItem("lang", preferredLang);
        } else {
            // WRONG LANG SELECTED: this lang is not in availableLangs
            let preferredLang = localStorage.getItem("lang")
            if (!availableLangs.includes(preferredLang)) preferredLang = "en"
            localStorage.setItem("lang", preferredLang);
        }

        langSet(localStorage.getItem("lang"))
    }, [])

    return { lang, langSet }
}
