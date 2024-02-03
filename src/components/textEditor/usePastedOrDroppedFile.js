import { useContext } from "react"
import { Context } from "../../Context"
import { SERVER_URL } from "../../utils/consts"
import timestampToDate from "../../utils/timestampToDate"
import timestampToTime from "../../utils/timestampToTime"

export default function usePastedOrDroppedFile({ valueSet, uploadPath }) {

	// ! processPastedOrDroppedFile
	const { pastedOrDroppedImgSet } = useContext(Context)

	function processPastedOrDroppedFile(pastedOrDroppedFile, isImgPasted) {
		const fileRenamed = new File([pastedOrDroppedFile], pastedOrDroppedFile.name.split(".")[0] + Date.now() + "." + pastedOrDroppedFile.name.split(".")[1]) // eg: image1695902498918.png
		pastedOrDroppedImgSet(prev => [...prev, fileRenamed])
		if (!valueSet) return // for TextEditor: set TextEditor value
		const imgName = isImgPasted ? `pasted image: ${timestampToDate(Date.now())} ${timestampToTime(Date.now())}` : pastedOrDroppedFile.name
		valueSet(prev => prev + `\n![${imgName}](${SERVER_URL}${uploadPath}/${fileRenamed.name})`)
	}

	// ! savePastedImgOnServer
	function savePastedImgOnServer(e) {
		if (e.clipboardData.files.length > 0) {
			processPastedOrDroppedFile(e.clipboardData.files[0], true)
		}
	}

	// ! saveDroppedImgOnServer
	function saveDroppedImgOnServer(e) {
		e.preventDefault()
		if (e.dataTransfer.files.length > 0) {
			processPastedOrDroppedFile(e.dataTransfer.files[0])
		}
	}

	return (
		{ savePastedImgOnServer, saveDroppedImgOnServer }
	)
}
