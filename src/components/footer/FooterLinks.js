import Link2 from "../other/Link2";
import FooterLink from "./FooterLink";
import t from "../../hooks/useT";
import { FAQ_ROUTE, NEWSLETTER_ROUTE, SUPPORTS_ROUTE } from "../../utils/consts";

export default function FooterLinks() {
    return (
        <div className='fcc w100p footerLinks'>
            <div className='f jcsb'>
                <FooterLink text={t("Terms")} type="terms" />
                <div className="mx15 hideOnMobile">/</div>
                <FooterLink text={t("Privacy")} type="privacy" />
                <div className="mx15 hideOnMobile">/</div>
                <Link2 to={NEWSLETTER_ROUTE}>{t("Newsletter")}</Link2>
                <div className="mx15 hideOnMobile">/</div>
                <Link2 to={FAQ_ROUTE}>{t("FAQ")}</Link2>
                <div className="mx15 hideOnMobile">/</div>
                <Link2 to={SUPPORTS_ROUTE}>{t("Support")}</Link2>
            </div>
        </div>
    )
}
