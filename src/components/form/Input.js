import useInputTypeNumberPreventScroll from "./useInputTypeNumberPreventScroll"

export default function Input(props) {

    const { inputTypeNumberPreventScroll } = useInputTypeNumberPreventScroll()

    return (
        <input
            onWheel={inputTypeNumberPreventScroll}
            {...props}
        />
    )
}
