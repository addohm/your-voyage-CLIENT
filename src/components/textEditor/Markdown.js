import React from "react"
import Markdown from "marked-react"
import "./index.scss"

export default function Markdown_({ children }) {
	return (
		<pre className="innerImgW100p">
			<Markdown>{children}</Markdown>
		</pre>
	)
}