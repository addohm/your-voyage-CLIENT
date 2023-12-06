import { Button } from "@mui/material";

export default function CoachCardApplier() {
    return (
        <div className="fc aic">
            <input className="mb10 h40 w200" name="email" placeholder="email" />
            <input className="mb10 h40 w200" name="name" placeholder="name" />
            <input className="mb10 h40 w200" name="point_a" placeholder="your current career situation" />
            <input className="mb10 h40 w200" name="point_b" placeholder="your dream career" />
            <Button variant="contained">APPLY</Button>
        </div>
    )
}
