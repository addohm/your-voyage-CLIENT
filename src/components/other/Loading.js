import { CircularProgress } from "@mui/material";

export default function Loading({ isLoading, children }) {
    return (
        isLoading
            ?
            <div className="m0a wfc">
                <CircularProgress />
            </div>
            :
            <>
                {children}
            </>
    )
}
