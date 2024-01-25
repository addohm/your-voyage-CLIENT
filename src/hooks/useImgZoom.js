import { useContext } from "react"
import { Context } from "../Context"

export default function useImgZoom() {

    const { dialogSet } = useContext(Context)

    function imgZoom(e) {
        if (!e.target.src) return // not img
        dialogSet({
            show: true,
            children:
                <img
                    src={e.target.src}
                    style={{ width: "40vw", height: "40%" }}
                />
        })
    }

    return { imgZoom }
}