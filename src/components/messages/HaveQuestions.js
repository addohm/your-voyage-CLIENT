import { FAQ_ROUTE, SUPPORTS_ROUTE } from "../../utils/consts";
import Link2 from "../other/Link2";
import t from "../../hooks/useT";

export default function HaveQuestions() {
    return (
        <div className="fc aic wfc m0a pb20">
            <div className="title2">{t("Have any questions")}?</div>
            <Link2 to={SUPPORTS_ROUTE}>- {t("Visit our Support")}</Link2>
            <Link2 to={FAQ_ROUTE}>- {t("Visit our FAQ")}</Link2>
        </div>
    )
}
