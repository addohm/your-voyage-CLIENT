import { useEffect, useState } from "react"

export default function useApplierForm() {

    const _localStorage = JSON.parse(localStorage.getItem("applierForm"))
    const [applierForm, applierFormSet] = useState(_localStorage)

    // save applierForm onChange
    useEffect(() => {
        localStorage.setItem("applierForm", JSON.stringify(applierForm))
    }, [applierForm])

    // apply applierForm onLoad
    useEffect(() => {
        applierFormSet(_localStorage)
    }, [])

    return { applierForm, applierFormSet }
}
