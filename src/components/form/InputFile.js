import { AttachFile } from "@mui/icons-material";
import Input from "./Input";

export default function InputFile({ onChange, className }) {
    return (
        <label className={className}>
            <AttachFile style={{ width: 30, height: 30 }} />
            {/* TODO !!! not files[0] */}
            <Input hidden type="file" multiple onChange={onChange} />
        </label>
    )
}
