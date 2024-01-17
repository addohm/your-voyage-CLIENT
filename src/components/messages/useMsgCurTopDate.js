import { useEffect, useRef, useState } from "react";

export default function useMsgCurTopDate(msgCurTopDateSet, msgDate) {

    const msgCurTopDateRef = useRef(null) // ref for each message to check if this message is at the top
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const updatePosition = () => {
            if (msgCurTopDateRef.current) {
                const rect = msgCurTopDateRef.current.getBoundingClientRect();
                setPosition({ top: rect.top, left: rect.left });
            }
        };

        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);

        // Initial position update
        updatePosition();

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        };
    }, []);

    // set top's message date to MsgCurTopDate
    if (position.top >= 0 && position.top < 100) {
        msgCurTopDateSet?.(msgDate)
    }

    return (
        { msgCurTopDateRef }
    )
}
