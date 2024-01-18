import Input from "../form/Input";
import CoachCardApplierApplyBtn from "./CoachCardApplierApplyBtn";
import CoachCardApplierEmail from "./CoachCardApplierEmail";
import t from "../../hooks/useT";

export default function CoachCardApplier() {
    return (
        <div className="fc aic">
            <CoachCardApplierEmail />
            <Input required className="mb10 h40 w200" name="name" placeholder={t("name")} />
            <Input required className="mb10 h40 w200" name="point_a" placeholder={t("your current career situation")} />
            <Input required className="mb10 h40 w200" name="point_b" placeholder={t("your dream career")} />
            <CoachCardApplierApplyBtn />
        </div>
    )
}
