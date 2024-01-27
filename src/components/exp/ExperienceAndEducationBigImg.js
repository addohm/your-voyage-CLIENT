// bg fullscreen company img
export default function ExperienceAndEducationBigImg({ experience, education, companyHovered }) {

    const companySiteSrc = experience.find(({ company }) => company === companyHovered)?.site || education.find(({ company }) => company === companyHovered)?.site

    return (
        companyHovered &&
        <img
            src={companySiteSrc}
            className='poa zi0 w100vw h100vh blurAnim'
        />
    )
}
