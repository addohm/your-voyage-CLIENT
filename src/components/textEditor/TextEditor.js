import React, { useCallback, useEffect, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./index.scss"
import usePastedOrDroppedFile from "./usePastedOrDroppedFile";
import TextEditorLabel from "./TextEditorLabel";

export default function TextEditor({ defaultValue, className, label, type }) { // type: product/article

	const [value, valueSet] = useState("")

	useEffect(() => {
		defaultValue && valueSet(defaultValue?.replace(/•/g, ""))
	}, [defaultValue])

	const onChange = useCallback((value) => {
		valueSet(value?.replace(/•/g, ""));
	}, [])

	const { savePastedImgOnServer, saveDroppedImgOnServer } = usePastedOrDroppedFile(valueSet, type)

	return (
		<div className={`w100p ${className}`}>
			<TextEditorLabel label={label} valueLength={value.length} className="mb05" />
			<SimpleMDE
				value={value}
				onChange={onChange}
				onPaste={savePastedImgOnServer}
				onDrop={saveDroppedImgOnServer}
				onDragOver={(e) => e.preventDefault()}
				placeholder="..."
			/>
			<input hidden name="textEditorValue" value={value} />
		</div>
	)
}