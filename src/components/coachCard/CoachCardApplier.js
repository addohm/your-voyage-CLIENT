import { Button } from "@mui/material";

export default function CoachCardApplier() {
    return (
        <div className="fc aic">
            <input required className="mb10 h40 w200" name="email" placeholder="email" />
            <input required className="mb10 h40 w200" name="name" placeholder="name" />
            <input required className="mb10 h40 w200" name="point_a" placeholder="your current career situation" />
            <input required className="mb10 h40 w200" name="point_b" placeholder="your dream career" />
            <Button type="submit" variant="contained">APPLY</Button>
        </div>
    )
}
