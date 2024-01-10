import { useEffect, useState } from "react";

export default function useInterval(int = 3000) {

    const [interval, intervalSet] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            intervalSet(prev => prev + 1);
        }, int);

        return () => clearInterval(intervalId);
    }, [])

    return { interval }
}
