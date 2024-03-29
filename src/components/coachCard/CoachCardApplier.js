import Input from "../form/Input";
import CoachCardApplierApplyBtn from "./CoachCardApplierApplyBtn";
import CoachCardApplierEmail from "./CoachCardApplierEmail";
import t from "../../hooks/useT";
import { useContext } from "react";
import { Context } from "../../Context";

export default function CoachCardApplier() {

    const { applierFormSet, applierForm } = useContext(Context)

    return (
        <div className="fc aic">
            <CoachCardApplierEmail />
            <Input required value={applierForm?.name} onChange={(e) => applierFormSet(prev => ({ ...prev, name: e.target.value }))} className="mb10 h40 w200" name="name" placeholder={t("name")} />
            <Input required value={applierForm?.point_a} onChange={(e) => applierFormSet(prev => ({ ...prev, point_a: e.target.value }))} className="mb10 h40 w200" name="point_a" placeholder={t("your current career situation")} />
            <Input required value={applierForm?.point_b} onChange={(e) => applierFormSet(prev => ({ ...prev, point_b: e.target.value }))} className="mb10 h40 w200" name="point_b" placeholder={t("your dream career")} />
            <CoachCardApplierApplyBtn />
        </div>
    )
}
