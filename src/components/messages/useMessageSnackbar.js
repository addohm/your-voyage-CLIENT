import { useState } from "react"
import Room from "./Room"

export default function useMessageSnackbar(snackbarSet, user) {

    const [isVisibleSnackbar, isVisibleSnackbarSet] = useState(true)

    function showSnackbar(res) {

        res?.map((message) => {
            const { userId, isRead, isDeleted, notReadNum } = message
            if (isDeleted) return // don't show deleted messages in snackbar
            if (isRead) return // don't show read messages in snackbar
            if (notReadNum === 0) return // don't show read messages in snackbar

            const isReceivedMsgMyMsg = user?._id === userId
            if (isReceivedMsgMyMsg) return // don't show my messages in snackbar
            if (!isVisibleSnackbar) return // if user clicked "close snackbar": don't show snackbar until page reload

            snackbarSet({
                show: true,
                text: <Room {...message} />,
                onClose: () => isVisibleSnackbarSet(false)
            })
        })
    }

    return { showSnackbar }
}
