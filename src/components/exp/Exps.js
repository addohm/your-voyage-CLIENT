import { useState } from "react";
import Exp from "./Exp";
import './index.scss'
import Title from "../other/Title";

export default function Exps({ arr, title, companyHoveredSet, companyHovered }) {

    const [isExpHovered, isExpHoveredSet] = useState(false)

    return (
        <div className="fc">
            <Title title={title} isExpHovered={isExpHovered} className={`${companyHovered ? "op0 transition15" : "op1 transition15"}`} />
            <div className='fc exps'>
                {arr.map(({ img, position, company }, ind) => (
                    <Exp key={ind} img={img} position={position} company={company} ind={ind} isExpHoveredSet={isExpHoveredSet} companyHoveredSet={companyHoveredSet} companyHovered={companyHovered} />
                ))}
            </div>
        </div>
    )
}
