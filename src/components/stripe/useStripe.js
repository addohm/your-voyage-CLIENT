import { useEffect, useState } from "react";
import { SERVER_URL } from "../../utils/consts";

export default function useStripe() {

    const [stripeLink, stripeLinkSet] = useState("")

    useEffect(() => {
        fetch(`${SERVER_URL}/create-checkout-session`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: {},
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
    }, [])

    return { stripeLink }
}