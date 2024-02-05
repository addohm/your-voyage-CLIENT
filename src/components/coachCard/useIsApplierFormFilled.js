import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import useGoToCoach from "../../hooks/useGoToCoach"

export default function useIsApplierFormFilled() {

    const [isApplierFormFilled, isApplierFormFilledSet] = useState(false)
    const { applierForm, dialogSet } = useContext(Context)
    const { goToCoach } = useGoToCoach()

    useEffect(() => {
        if (!applierForm) return
        let numFilledFields = 0

        const applierFormCopy = { ...applierForm }
        delete applierFormCopy.courseId // don't need this field: invisible for user
        delete applierFormCopy.courseName // don't need this field: invisible for user
        const neededFieldsNum = 11 // could have used: Object.keys(applierFormCopy).length BUT applierForm each field does not exist before input in this form is filled/click, so have to manually set 11

        Object.keys(applierFormCopy)?.map(applierFormKey => {
            if (!applierFormCopy[applierFormKey]) { // if any field is empty: all false
                isApplierFormFilledSet(false)
            } else { // calculate if all fields are filled
                numFilledFields++
            }
            if (numFilledFields === neededFieldsNum) isApplierFormFilledSet(true)
        })
    }, [applierForm])

    function checkApplierFormFilled(e) {
        if (isApplierFormFilled) return
        // if applier form is not filled: goToCoach: fill the form
        e.stopPropagation()
        e.preventDefault()
        goToCoach()
        dialogSet({ show: false }) // close long Course separate dialog
    }

    return { isApplierFormFilled, checkApplierFormFilled }
}
