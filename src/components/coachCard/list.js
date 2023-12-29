import Dots from "../dots/Dots"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"

// same
const radio = [
    ["TRAVELING", "STAYING AT HOME"],
    ["PART-TIME", "FULL-TIME"],
    ["ONSITE", "REMOTE"],
    ["FREELANCE", "CONTRACT"],
]

// diff
export const info = [
    {
        img: img1,
        title: "let's get acquainted",
        radio,
        rating: [
            { name: "TECH INNOVATIONS", rating: 5 },
            { name: "GADGETS", rating: 4 },
            { name: "NEW STRATEGIES", rating: 5 },
            { name: "VACATION", rating: 3 },
        ]
    },
    {
        img: img2,
        title: <>now is your turn<Dots /></>,
        radio,
        rating: [
            { name: "TECH INNOVATIONS", rating: 0 },
            { name: "GADGETS", rating: 0 },
            { name: "NEW STRATEGIES", rating: 0 },
            { name: "VACATION", rating: 0 },
        ]
    },
]
