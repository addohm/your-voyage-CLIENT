// parse many posts form (to add/edit many posts at once)
// eg:
// <form>
// <div><inputs...><LAST input after which new `post` begins></div>
// <div><inputs...><LAST input after which new `post` begins></div>
// <div><inputs...><LAST input after which new `post` begins></div>
// </form>
export default function parseForms({ e, lastInputName }) { // e=event from onSubmit (html form)

	let forms = []
	let form = {}

	const eventOrEventTarget = e?.target || e

	// put all `inputs` values to "form"
	eventOrEventTarget.querySelectorAll("input, select, textarea").forEach(each => {
		if (each.name && each.value) {
			form = { ...form, [each.name]: each.checked || each.value }
		}
		if (each.name === lastInputName) { // new `post` begins after this input
			forms = [...forms, form]
			form = {}
		}
	})

	return forms
}