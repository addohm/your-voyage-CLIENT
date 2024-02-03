import React, { useContext } from 'react'
import InputFile from '../../form/InputFile'
import useAddCourseFiles from './useAddCourseFiles'
import { Context } from '../../../Context'
import InputRequiredNativeTooltip from '../../form/InputRequiredNativeTooltip'

export default function AddCourseImg({ ind, img2 }) {

    const { saveUploadedFilesOnServer } = useAddCourseFiles({ ind })
    const { pastedOrDroppedImg } = useContext(Context)
    const placeholder = pastedOrDroppedImg?.[ind]?.name || img2?.match(/(.*)\/([^/]*)$/)[2] // text after last slash

    return (
        <>
            <InputFile
                onChange={saveUploadedFilesOnServer}
                placeholder={placeholder}
                placeholderText="Choose course image"
                className="ml-3"
            />
            <InputRequiredNativeTooltip required={!placeholder} className="poa cx t80" />
        </>
    )
}
