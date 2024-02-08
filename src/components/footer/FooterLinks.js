import Link2 from "../other/Link2";
import FooterLink from "./FooterLink";
import t from "../../hooks/useT";
import { FAQ_ROUTE, NEWSLETTER_ROUTE, SUPPORTS_ROUTE } from "../../utils/consts";

export default function FooterLinks() {

    const terms = t("Terms") && " ~ " + t("Terms")
    const privacy = t("Privacy") && " ~ " + t("Privacy")
    const newsletter = t("Newsletter") && " ~ " + t("Newsletter")
    const faq = t("FAQ") && " ~ " + t("FAQ")
    const support = t("Support") && " ~ " + t("Support")

    return (
        <div className='fcc w100p footerLinks'>
            <div className='f jcsb'>
                <div className="mr15">
                    <FooterLink text={terms} type="terms" />
                </div>
                <div className="mr15">
                    <FooterLink text={privacy} type="privacy" />
                </div>
                <div className="mr15">
                    <Link2 to={NEWSLETTER_ROUTE}>{newsletter}</Link2>
                </div>
                <div className="mr15">
                    <Link2 to={FAQ_ROUTE}>{faq}</Link2>
                </div>
                <div className="mr15">
                    <Link2 to={SUPPORTS_ROUTE}>{support}</Link2>
                </div>
            </div>
        </div>
    )
}
