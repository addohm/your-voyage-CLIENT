import React, { useCallback, useEffect, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./index.scss"
import TextEditorLabel from "./TextEditorLabel";
import InputRequiredNativeTooltip from "../form/InputRequiredNativeTooltip";

export default function TextEditor(props) { // type: product/article

	const { defaultValue, className, label, type, isVisible, name, value, valueSet, onPaste, onDrop } = props

	useEffect(() => {
		defaultValue && valueSet(defaultValue?.replace(/•/g, ""))
	}, [defaultValue])

	const onChange = useCallback((value) => {
		valueSet(value);
	}, [])

	const noValue = value?.length === 0

	return (
		(isVisible === undefined || isVisible) &&
		<div className={`por w100p ${className}`}>
			<TextEditorLabel label={label} valueLength={value?.length} className="mb05" />
			<SimpleMDE
				value={value}
				onChange={onChange}
				onPaste={onPaste}
				onDrop={onDrop}
				onDragOver={(e) => e.preventDefault()}
				placeholder="...paste or drop image here"
			/>
			<input hidden name={name} value={value} />
			<InputRequiredNativeTooltip required={noValue} className="ca" />
		</div>
	)
}