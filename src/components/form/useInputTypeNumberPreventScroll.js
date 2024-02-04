export default function useInputTypeNumberPreventScroll() {

  function inputTypeNumberPreventScroll(e) {
    e.target.blur()
    e.stopPropagation()
    setTimeout(() => { e.target.focus() }, 0)
  }

  return { inputTypeNumberPreventScroll }
}
