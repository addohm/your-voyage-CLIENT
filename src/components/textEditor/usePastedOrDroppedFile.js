import { useContext } from "react"
import { Context } from "../../Context"
import { baseURL } from "../../utils/consts"

export default function usePastedOrDroppedFile(valueSet, type) {

	// ! processPastedOrDroppedFile
	const { pastedOrDroppedImgSet } = useContext(Context)

	function processPastedOrDroppedFile(pastedOrDroppedFile) {
		const fileRenamed = new File([pastedOrDroppedFile], pastedOrDroppedFile.name.split(".")[0] + Date.now() + "." + pastedOrDroppedFile.name.split(".")[1]) // eg: image1695902498918.png
		pastedOrDroppedImgSet(prev => [...prev, fileRenamed])
		valueSet(prev => prev + `\n![image](${baseURL}/upload/siteContent/${fileRenamed.name})`)
	}

	// ! savePastedImgOnServer
	function savePastedImgOnServer(e) {
		if (e.clipboardData.files.length > 0) {
			processPastedOrDroppedFile(e.clipboardData.files[0])
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
