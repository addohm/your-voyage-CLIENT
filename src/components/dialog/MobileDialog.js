import DialogIcons from "./DialogIcons";

export default function MobileDialog({ children }) {
    return (
        <div className="fc">
            {children}
            {/* add additional close icon on mobile: top mobile native (android) menu can hide top dialog icons */}
            <DialogIcons className="wfc por cx" closeIconClassName="visibleOnMobile mt15" backIconClassName="dn" />
        </div>
    )
}
