import { Button } from "@mui/material";
import useStripe from "../stripe/useStripe";

export default function CoachCardApplierApplyBtn() {

    const { stripeLink } = useStripe()

    return (
        <Button
            type="submit"
            variant="contained"
            onClick={() => window.location.href = stripeLink}
        >
            APPLY
        </Button>
    )
}
