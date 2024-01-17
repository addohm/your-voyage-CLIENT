import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function OldMessagesLoadMoreBtn({ skipOldDbMessagesSet }) {

    const [isLoading, isLoadingSet] = useState(true)

    function loadMore() {
        skipOldDbMessagesSet(prev => prev + 10)
        window.scrollTo({ top: 10, behavior: 'smooth' }) // go down so next time you can reach scrollY === 0 again
        isLoadingSet(false)
    }

    // load more when you reach scrollY === 0
    useEffect(() => {
        const handleScroll = () => window.scrollY === 0 && loadMore();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [window.scrollY]);

    return (
        // TODO !!! loader
        // isLoading ? <div className="w40 h40 m0a"><CircularProgress /></div> : null
        ""
    )
}
