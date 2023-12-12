/* 
used with custom inputs where native input is hidden
placed inside parent with className="por" (position: relative)
*/
export default function InputRequiredNativeTooltip({ required, className }) {
    return (
        <input required={required} className={`hiddenInput bb ${className}`} />
    )
}
