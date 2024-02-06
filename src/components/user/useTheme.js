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
        // set body background dep on theme to avoid white flash on page load 
        document.body.style.background = localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme") ? "#1E2127" : "#F2F2F2"
    }, [])

    return { theme, themeSet }
}
