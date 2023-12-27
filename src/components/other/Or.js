import React from "react"

export default function Or({ text = "OR", className }) {
	return (
		<div className={`f fwn aic w100p fw600 wsn fwAnim ${className}`}>
			<div className="w100p"><hr></hr></div>
			<div className="px15">{text}</div>
			<div className="w100p"><hr></hr></div>
		</div>
	)
}
