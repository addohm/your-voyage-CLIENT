export default function InputFilePlaceholder({ placeholder, placeholderText }) {
    return (
        placeholder
            ?
            <div className="w225 oh wsn toe">{placeholder}</div>
            :
            <div className={`${placeholderText ? "ml10 tdu" : "ml-18"}`}>{placeholderText}</div>
    )
}
