import React, { useContext } from "react"
import Markdown from "marked-react"
import "./index.scss"
import { Context } from "../../Context"

export default function Markdown_({ children, className }) {

	const { dialogSet } = useContext(Context)

	function zoomImg(e) {
		if (!e.target.src) return // not img
		dialogSet({
			show: true,
			children:
				<img
					src={e.target.src}
					style={{ width: "100vw", height: "100%" }}
				/>
		})
	}

	return (
		<pre className={`innerImgW100p ${className}`} onClick={zoomImg}>
			<Markdown>{children}</Markdown>
		</pre>
	)
}