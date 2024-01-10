import { AddRounded } from "@mui/icons-material";
import Input from "./Input";

export default function InputFile({ setter }) {
    return (
        <label>
            <AddRounded style={{ width: 37, height: 37 }} />
            {/* TODO !!! not files[0] */}
            <Input hidden type="file" multiple onChange={(e) => setter(prev => [...prev, e.target.files[0]])} />
        </label>
    )
}
