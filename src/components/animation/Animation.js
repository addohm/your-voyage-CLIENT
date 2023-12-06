import useAnimation from "./useAnimation"

export default function Animation({ children, type, delay, duration }) {

    const { ref, inView, motion, variants } = useAnimation(delay, duration)

    return (
        <motion.div
            ref={ref}
            initial={variants[`${type + "Hidden"}`]}
            animate={inView ? variants[`${type + "Visible"}`] : variants[`${type + "Hidden"}`]}
            variants={variants}
        >
            {children}
        </motion.div>
    )
}
