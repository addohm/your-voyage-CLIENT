import { useEffect, useState } from "react";

export default function useInterval() {

    const [interval, intervalSet] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            intervalSet(prev => prev + 1);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [])

    return { interval }
}
