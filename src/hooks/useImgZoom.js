import { useContext } from "react"
import { Context } from "../Context"
import MobileDialog from "../components/dialog/MobileDialog"

export default function useImgZoom() {

    const { dialogSet } = useContext(Context)

    function imgZoom(e) {
        if (!e.target.src) return // not img
        dialogSet({
            show: true,
            children:
                <MobileDialog>
                    <img
                        src={e.target.src}
                        style={{ width: "100%", height: "100%", minWidth: "300px" }}
                    />
                </MobileDialog>
        })
    }

    return { imgZoom }
}
