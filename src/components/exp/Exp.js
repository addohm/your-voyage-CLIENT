import Animation from "../animation/Animation";
import TextSplit from "../animation/TextSplit";
import t from "../../hooks/useT";

export default function Exp({ img, position, company, ind, isExpHoveredSet, companyHoveredSet, companyHovered }) {
    return (
        <Animation type="bottomRight" delay={ind / 10}>
            <div
                className='fcc wfc'
                style={{ position: 'relative', left: 0 + ind * 100 }}
                onMouseEnter={() => isExpHoveredSet(true)}
                onMouseLeave={() => isExpHoveredSet(false)}
            >
                <img src={img}
                    // original img
                    className={`por zi2 ${!companyHovered ? 'op1' : 'op0'} br50`}
                />
                <img src={img}
                    // img for rotatingBorder
                    className={`poa l-2 t-2 zi1 ${!companyHovered ? 'op1' : 'dn'} br50 rotatingBorder`}
                />
                <img src={img}
                    // fake img for mouseLeave
                    onMouseEnter={() => companyHoveredSet(company)}
                    onMouseLeave={() => companyHoveredSet("")}
                    className={`poa t0 l0 zi2 ${companyHovered === company ? 'op1' : 'op0'} br50`}
                />
                <div className={`fc ml15 ${companyHovered ? "op0" : "op1"}`}>
                    <div className='fz22'><TextSplit str={t(position)} /></div>
                    <div className='fz18 fw600'><TextSplit str={company} /></div>
                </div>
            </div>
        </Animation>
    )
}
