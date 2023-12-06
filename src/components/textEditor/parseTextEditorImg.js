// * finds img url in TextEditor markup
export default function parseTextEditorImg(value) {
	return value?.match(/!\[.*]\(((https|http).+)(?:\))/)?.[1] // * match http(s) .+ ...)
}