import { useEffect, useState } from "react";
import { SERVER_URL } from "../../utils/consts";

export default function useStripe(courseName) {

    const [stripeLink, stripeLinkSet] = useState("")

    useEffect(() => {
        if (!courseName) return
        fetch(`${SERVER_URL}/create-checkout-session`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ courseName }),
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
    }, [courseName])

    return { stripeLink }
}