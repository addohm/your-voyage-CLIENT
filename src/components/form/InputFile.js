import { AddRounded } from "@mui/icons-material";
import Input from "./Input";

export default function InputFile({ onChange }) {
    return (
        <label>
            <AddRounded style={{ width: 37, height: 37 }} />
            {/* TODO !!! not files[0] */}
            <Input hidden type="file" multiple onChange={onChange} />
        </label>
    )
}
