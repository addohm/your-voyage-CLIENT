import Input from "../form/Input";
import CoachCardApplierApplyBtn from "./CoachCardApplierApplyBtn";
import CoachCardApplierEmail from "./CoachCardApplierEmail";

export default function CoachCardApplier() {
    return (
        <div className="fc aic">
            <CoachCardApplierEmail />
            <Input required className="mb10 h40 w200" name="name" placeholder="name" />
            <Input required className="mb10 h40 w200" name="point_a" placeholder="your current career situation" />
            <Input required className="mb10 h40 w200" name="point_b" placeholder="your dream career" />
            <CoachCardApplierApplyBtn />
        </div>
    )
}
