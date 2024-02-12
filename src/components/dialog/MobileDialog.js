export default function MobileDialog({ children }) {
    return (
        // currently MobileDialog does nothing, but don't delete it, as we can see where were problems with native (android) ui: top mobile native (android) menu can hide top dialog icons
        // currently additional close icon on mobile is added in Dialog 
        <>
            {children}
        </>
    )
}
