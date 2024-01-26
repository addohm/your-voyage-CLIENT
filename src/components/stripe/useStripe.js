import { useEffect, useState } from "react";
import { SERVER_URL } from "../../utils/consts";

export default function useStripe(courseId) {

    const [stripeLink, stripeLinkSet] = useState("")

    useEffect(() => {
        if (!courseId) return
        fetch(`${SERVER_URL}/create-checkout-session`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ courseId }),
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.error) { // ! error
                    console.log(data.error)
                    return
                }
                // ! ok
                stripeLinkSet(data.url);
            });
    }, [courseId])

    return { stripeLink }
}