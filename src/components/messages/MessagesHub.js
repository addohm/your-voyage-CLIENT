import CheckSubscription from "./CheckSubscription";
import Socket from "./Socket";

export default function MessagesHub() {
    return (
        <>
            <CheckSubscription />
            <Socket />
        </>
    )
}
