export default function parseForm(e) { // e=event from onSubmit (html form)

	let form = {} // {"any field 1": "@","any field 2": "123","any field 3": "abc"}

	const eventOrEventTarget = e?.target || e

	// put all `inputs` values to "form"
	eventOrEventTarget.querySelectorAll("input, select, textarea").forEach(each => {
		if (each.name && each.value) {

			form = { ...form, [each.name]: each.checked || each.value }
		}
	})

	return (
		form
	)
}