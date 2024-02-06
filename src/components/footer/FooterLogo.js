import t from '../../hooks/useT'

export default function FooterLogo() {
    return (
        <div className='fcc w100p'>
            <div className='wfc'>
                <div className='fw600 wsn'>{t("Career Coach & HR director")}</div>
                <div className='fw600 brand tac'>{t("Xiaoyang Li")}</div>
            </div>
        </div>
    )
}
