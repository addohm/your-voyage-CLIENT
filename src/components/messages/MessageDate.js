import { useEffect, useRef, useState } from "react";

export default function MessageDate({ msgDate, messageDateTopCopySet }) {

    const elementRef = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const updatePosition = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
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

    useEffect(() => {
        if (position.top <= 0) { // this msgDate passed => set msgDateTopCopy this msgDate
            messageDateTopCopySet?.(msgDate)
        }
    }, [position])

    return (
        msgDate &&
        <div
            ref={elementRef}
            className="bg_white p15 my30 brL fw600 zi3"
        >
            {msgDate}
        </div>
    )
}
