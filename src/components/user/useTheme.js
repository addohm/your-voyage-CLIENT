import { useEffect, useState } from "react"

export default function useTheme() {

    const [theme, themeSet] = useState([])

    useEffect(() => {
        // set default theme from browser
        if (!localStorage.getItem("theme")) {
            const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            localStorage.setItem("theme", preferredTheme);
        }

        themeSet(localStorage.getItem("theme"))
    }, [])

    return { theme, themeSet }
}
