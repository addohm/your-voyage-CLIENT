import React, { useCallback, useEffect, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./index.scss"
import usePastedOrDroppedFile from "./usePastedOrDroppedFile";
import TextEditorLabel from "./TextEditorLabel";
import InputRequiredNativeTooltip from "../form/InputRequiredNativeTooltip";

export default function TextEditor(props) { // type: product/article

	const { defaultValue, className, label, type, isVisible, name, value, valueSet, uploadPath } = props

	useEffect(() => {
		defaultValue && valueSet(defaultValue?.replace(/•/g, ""))
	}, [defaultValue])

	const onChange = useCallback((value) => {
		valueSet(value?.replace(/•/g, ""));
	}, [])

	const { savePastedImgOnServer, saveDroppedImgOnServer } = usePastedOrDroppedFile(valueSet, uploadPath)
	const noValue = value?.length === 0

	return (
		(isVisible === undefined || isVisible) &&
		<div className={`por w100p ${className}`}>
			<TextEditorLabel label={label} valueLength={value?.length} className="mb05" />
			<SimpleMDE
				value={value}
				onChange={onChange}
				onPaste={savePastedImgOnServer}
				onDrop={saveDroppedImgOnServer}
				onDragOver={(e) => e.preventDefault()}
				placeholder="..."
			/>
			<input hidden name={name} value={value} />
			<InputRequiredNativeTooltip required={noValue} className="ca" />
		</div>
	)
}