import { useEffect } from "react"

export default function useDefaultCoachValues() {
    useEffect(() => {
        document.querySelector(".coach").querySelectorAll(".radio-container").forEach(each => {
            const defaultCoachValues = ["TRAVELING", "FULL-TIME", "ONSITE", "CONTRACT"]
            if (defaultCoachValues.includes(each.innerText)) {
                each.classList.add("brand")
                each.classList.add("fw600")
            }
        })
    }, [])
    
    return (
        ""
    )
}
