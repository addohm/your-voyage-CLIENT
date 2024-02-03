import { TextField } from "@mui/material";
import { useState } from "react";

export default function InputMultiline(props) {

    const [isFocused, isFocusedSet] = useState(false)

    return (
        <TextField
            multiline
            style={{ height: isFocused ? "auto" : 48 }}
            onFocus={() => isFocusedSet(true)}
            onBlur={() => isFocusedSet(false)}
            variant="standard"
            {...props}
            className="oh"
        />
    )
}
