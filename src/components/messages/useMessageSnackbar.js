import { useState } from "react"
import Room from "./Room"

export default function useMessageSnackbar(snackbarSet, user) {

    const [isVisibleSnackbar, isVisibleSnackbarSet] = useState(true)

    function showSnackbar(res) {
        res?.map(({ isRead, room, email, isDeleted, ...message }) => {
            if (isDeleted) return // don't show deleted messages in snackbar
            if (isRead) return // don't show read messages in snackbar

            if (!user?.email) return // onLoad user is null for few ms
            const isReceivedMsgMyMsg = user?.email === email
            if (isReceivedMsgMyMsg) return // don't show my messages in snackbar
            if (!isVisibleSnackbar) return // if user clicked "close snackbar": don't show snackbar until page reload

            snackbarSet({
                show: true,
                text: <Room {...message} room={room} />,
                onClose: () => isVisibleSnackbarSet(false)
            })
        })
    }

    return { showSnackbar }
}
