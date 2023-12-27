import { Link } from "react-router-dom"

export default function SnackbarMessage({ text, link, linkText, linkType }) {
	// linkType = web || local
	const href = linkType === "web" ? `http://${link}` : `${link}`

	return (
		linkType === "web"
			?
			<>{text}<a href={href}>{linkText}</a></>
			:
			<>{text}<Link to={href}>{linkText}</Link></>
	)
}
