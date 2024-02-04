import { AttachFile } from "@mui/icons-material";
import Input from "./Input";

export default function InputFile({ onChange, className, placeholder, placeholderText }) {
    return (
        <label className={`hoverBrandColor ${className}`}>
            <div className="f fwn aic g15">
                <AttachFile style={{ width: 30, height: 30 }} />
                {placeholder ?
                    <div className="w225 oh wsn toe">{placeholder}</div>
                    :
                    <div className="ml10 tdu">{placeholderText}</div>
                }
            </div>
            {/* TODO !!! not files[0] */}
            <Input hidden type="file" multiple onChange={onChange} />
        </label>
    )
}
