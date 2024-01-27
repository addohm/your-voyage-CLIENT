import { useEffect } from "react"

export default function useDefaultCoachValues() {
    useEffect(() => {
        document.querySelector(".coach").querySelectorAll(".radio-container").forEach(each => {
            const defaultCoachValues = ["TRAVELING", "旅行", "FULL-TIME", "全职", "ONSITE", "现场", "CONTRACT", "合同"]
            if (defaultCoachValues.includes(each.innerText)) {
                each.classList.add("brand")
                each.classList.add("fw600")
                each.click()
            }
        })
    }, [])

    return (
        ""
    )
}
