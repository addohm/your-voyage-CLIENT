import { AttachFile } from "@mui/icons-material";
import Input from "./Input";
import InputFilePlaceholder from "./InputFilePlaceholder";

export default function InputFile({ onChange, className, placeholder, placeholderText, accept }) {
    return (
        <label className={`hoverBrandColor ${className}`}>
            <div className="f fwn aic g15 pb4">
                <AttachFile style={{ width: 30, height: 30 }} />
                <InputFilePlaceholder placeholder={placeholder} placeholderText={placeholderText} />
            </div>
            {/* TODO !!! not files[0] */}
            <Input hidden type="file" multiple onChange={onChange} accept={accept} />
        </label>
    )
}
