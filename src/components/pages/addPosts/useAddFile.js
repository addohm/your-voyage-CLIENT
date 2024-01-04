import axios from "../../../utils/axios"

export default function useAddFile() {

	async function fileArr(path, files) {
		const formData = new FormData()

		if (files.length > 0) {
			files.map(file => {
				formData.append("anyfile", file)
			})
		}

		const res = await axios(path, formData) // returns fileArr (on server) to store in DB: eg: ["imgPath1","imgPath2",...]
		return res?.fileArr
	}

	return (
		{ fileArr }
	)
}
