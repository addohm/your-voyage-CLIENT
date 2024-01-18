import React, { useState } from 'react'
import Exps from './Exps'
import { experience, education } from './list'
import t from '../../hooks/useT'

export default function ExperienceAndEducation() {

    const [companyHovered, companyHoveredSet] = useState("")
    const companySiteSrc = experience.find(({ company }) => company === companyHovered)?.site || education.find(({ company }) => company === companyHovered)?.site

    return (
        <div className='fcc h100vh por' style={{ gap: 300 }} >
            <Exps arr={experience} title={t("Experience")} companyHoveredSet={companyHoveredSet} companyHovered={companyHovered} />
            <Exps arr={education} title={t("Education")} companyHoveredSet={companyHoveredSet} companyHovered={companyHovered} />

            {/* bg fullscreen company img */}
            {companyHovered &&
                <img
                    src={companySiteSrc}
                    className='poa zi0 w100p h100p opAnim'
                />}
        </div>
    )
}
