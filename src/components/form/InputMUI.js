import { TextField } from "@mui/material";
import useInputTypeNumberPreventScroll from "./useInputTypeNumberPreventScroll";

export default function InputMUI(props) {

    const { inputTypeNumberPreventScroll } = useInputTypeNumberPreventScroll()

    return (
        <TextField
            variant="standard"
            onWheel={inputTypeNumberPreventScroll}
            {...props}
        />
    )
}
