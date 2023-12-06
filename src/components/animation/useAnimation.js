import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function useAnimation(delay = 0.5, duration = 1) {

    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    const variants = {
        leftHidden: { opacity: 0, x: -150 },
        leftVisible: { opacity: 1, x: 0, transition: { delay, duration } },
        // 
        rightHidden: { opacity: 0, x: 150 },
        rightVisible: { opacity: 1, x: 0, transition: { delay, duration } },
        // 
        bottomHidden: { opacity: 0, y: 350 },
        bottomVisible: { opacity: 1, y: 0, transition: { delay, duration } },
        // 
        topHidden: { opacity: 0, y: -350 },
        topVisible: { opacity: 1, y: 0, transition: { delay, duration } },
        // 
        bottomRightHidden: { opacity: 0, x: 150, y: 150 },
        bottomRightVisible: { opacity: 1, x: 0, y: 0, transition: { delay, duration } },
        // 
        bottomRotateHidden: { opacity: 0, transform: "translateY(85px) rotate(-90deg)" },
        bottomRotateVisible: { opacity: 1, transform: "translateY(0px) rotate(-90deg)", transition: { delay, duration } },
        // 
        blurHidden: { filter: "blur(5px)", opacity: 0 },
        blurVisible: { filter: "blur(0px)", opacity: 1, transition: { delay, duration } },
        // 
        opacityHidden: { opacity: 0 },
        opacityVisible: { opacity: 1, transition: { delay, duration } },
        // 
        scaleHidden: { scale: 0 },
        scaleVisible: { scale: 1, transition: { delay, duration } },
        // 
        scale091Hidden: { scale: 0.9 },
        scale091Visible: { scale: 1, transition: { delay, duration } },
        // 
        scale151Hidden: { scale: 1.5 },
        scale151Visible: { scale: 1, transition: { delay, duration } },
        //
        rotateYHidden: { transform: "rotateY(90deg)", transformStyle: "preserve-3d", transition: { delay, duration }, },
        rotateYVisible: { transform: "rotateY(0deg)", transformStyle: "preserve-3d", transition: { delay, duration }, },
    };

    return (
        { ref, inView, motion, variants }
    )
}
