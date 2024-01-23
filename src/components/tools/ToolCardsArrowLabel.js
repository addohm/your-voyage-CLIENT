import useWindowSize from "../../hooks/useWindowSize";
import Arrow from "../banner/Arrow";
import LeftTitle from "../other/LeftTitle";

export default function ToolCardsArrowLabel({ toolCardsHidden }) {

    const { windowWidth } = useWindowSize()

    return (
        windowWidth === 1920
            ?
            <div className="poa l-50 t150">
                <LeftTitle text="your success tools" isVisible={!toolCardsHidden} />
                <Arrow className="mx30 poa l110 t-35 w30 tr180" isVisible={!toolCardsHidden} />
            </div>
            :
            <div className="poa cx t-65">
                <LeftTitle className="tr90" text="your success tools" isVisible={!toolCardsHidden} />
                <Arrow className="mx30 poa l80 t-10 w30 tr-90" isVisible={!toolCardsHidden} />
            </div>
    )
}
