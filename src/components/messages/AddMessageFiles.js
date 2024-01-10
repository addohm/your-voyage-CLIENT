import { useContext } from "react";
import { Context } from "../../Context";
import InputFile from "../form/InputFile";

export default function AddMessageFiles() {

    const { msgFilesSet } = useContext(Context)

    return (
        <InputFile setter={msgFilesSet} />
    )
}
