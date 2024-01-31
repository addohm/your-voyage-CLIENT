import { useState } from "react"
import Room from "./Room"

export default function useMessageSnackbar(snackbarSet, user) {

    const [isVisibleSnackbar, isVisibleSnackbarSet] = useState(true)

    function showSnackbar(res) { // TODO !!! ???
        res?.map(({ isRead, room, isDeleted, userId, type, ...message }) => {
            if (isDeleted) return // don't show deleted messages in snackbar
            if (isRead) return // don't show read messages in snackbar

            if (!user?._id || !userId) return // onLoad user is null for few ms
            const isReceivedMsgMyMsg = user?._id === userId
            // TODO !!! if (isReceivedMsgMyMsg) return // don't show my messages in snackbar
            if (!isVisibleSnackbar) return // if user clicked "close snackbar": don't show snackbar until page reload
            if (!type) return // type: message/support

            snackbarSet({
                show: true,
                text: <Room {...message} room={room} type={type} />,
                onClose: () => isVisibleSnackbarSet(false)
            })
        })
    }

    return { showSnackbar }
}
