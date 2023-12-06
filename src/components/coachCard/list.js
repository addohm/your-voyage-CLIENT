import Dots from "../dots/Dots"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"

// same
const radio = [
    ["traveling", "staying at home"],
    ["Part-Time", "Full-Time"],
    ["onsite", "Remote"],
    ["Freelance", "Contract"],
]

// diff
export const info = [
    {
        img: img1,
        title: "let's get acquainted",
        radio,
        rating: [
            { name: "tech innovations", rating: 5 },
            { name: "gadgets", rating: 4 },
            { name: "new strategies", rating: 5 },
            { name: "vacation", rating: 3 },
        ]
    },
    {
        img: img2,
        title: <>now is your turn<Dots /></>,
        radio,
        rating: [
            { name: "tech innovations", rating: 0 },
            { name: "gadgets", rating: 0 },
            { name: "new strategies", rating: 0 },
            { name: "vacation", rating: 0 },
        ]
    },
]
