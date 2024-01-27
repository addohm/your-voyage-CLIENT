import React, { useState } from 'react'
import Exps from './Exps'
import { experience, education } from './list'
import t from '../../hooks/useT'
import ExperienceAndEducationBigImg from './ExperienceAndEducationBigImg'

export default function ExperienceAndEducation() {

    const [companyHovered, companyHoveredSet] = useState("")
    
    return (
        <div className='fcc h100vh por experienceAndEducation' style={{ gap: 300 }} >
            <Exps arr={experience} title={t("Experience")} companyHoveredSet={companyHoveredSet} companyHovered={companyHovered} />
            <Exps arr={education} title={t("Education")} companyHoveredSet={companyHoveredSet} companyHovered={companyHovered} />

            <ExperienceAndEducationBigImg experience={experience} education={education} companyHovered={companyHovered} />
        </div>
    )
}
