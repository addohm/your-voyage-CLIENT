import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function InputMultiline(props) {

    const [isFocused, isFocusedSet] = useState(false)

    // if the InputMultiline is long (>36 chars) it should be styled differently, to indicate that it can be expanded when focused (cause it's 1 line when not focused)
    const [isMoreThat1Row, isMoreThat1RowSet] = useState(false)
    const ref = useRef(null)
    useEffect(() => {
        const div = ref?.current?.querySelector("div")
        const textarea = div.querySelector("textarea").innerHTML
        textarea.length >= 36 && isMoreThat1RowSet(true)
    }, [])

    return (
        <TextField
            ref={ref}
            multiline
            style={{ height: isFocused ? "auto" : 48, borderBottom: isMoreThat1Row ? "1px dashed #ccc" : "none" }}
            onFocus={() => isFocusedSet(true)}
            onBlur={() => isFocusedSet(false)}
            variant="standard"
            {...props}
            className="oh"
        />
    )
}
