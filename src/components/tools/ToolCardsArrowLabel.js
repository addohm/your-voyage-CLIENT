import useWindowSize from "../../hooks/useWindowSize";
import Arrow from "../banner/Arrow";
import LeftTitle from "../other/LeftTitle";
import t from "../../hooks/useT";
import { useContext } from "react";
import { Context } from "../../Context";

export default function ToolCardsArrowLabel({ toolCardsHidden }) {
    
    const { windowWidth } = useWindowSize();
    const { lang } = useContext(Context);

    const commonClassName = "poa cx t-65";
    const titleText = t("Your success tools");
    const isChinese = lang === "zh";
    const isVisible = !toolCardsHidden;

    return (
        <>
            {windowWidth === 1920 &&
                (isChinese ? (
                    <div className="poa l0 t150">
                        <LeftTitle text={titleText} isVisible={isVisible} />
                        <Arrow className="mx30 poa l50 t-35 w30 tr180" isVisible={isVisible} />
                    </div>
                ) : (
                    <div className="poa l-50 t150">
                        <LeftTitle text={titleText} isVisible={isVisible} />
                        <Arrow className="mx30 poa l110 t-35 w30 tr180" isVisible={isVisible} />
                    </div>
                ))}
            {windowWidth !== 1920 && isChinese && (
                <div className={commonClassName}>
                    <LeftTitle className="tr90" text={titleText} isVisible={isVisible} />
                    <Arrow className="mx30 poa l10 t-10 w30 tr-90" isVisible={isVisible} />
                </div>
            )}
            {windowWidth !== 1920 && !isChinese && (
                <div className={commonClassName}>
                    <LeftTitle className="tr90" text={titleText} isVisible={isVisible} />
                    <Arrow className="mx30 poa l80 t-10 w30 tr-90" isVisible={isVisible} />
                </div>
            )}
        </>
    );
}
