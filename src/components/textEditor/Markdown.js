import React from "react"
import Markdown from "marked-react"
import "./index.scss"

export default function Markdown_({ children, className }) {
	return (
		<pre className={`innerImgW100p ${className}`}>
			<Markdown>{children}</Markdown>
		</pre>
	)
}