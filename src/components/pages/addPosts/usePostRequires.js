export default function usePostRequires(type) {

    // don't show inputs (title,link) in edit footer; don't require image in edit footer textEditor
    const isInEditFooterLocation = type === "terms" || type === "privacy"
    let [isAddImgRequired, isInputVisible] = [!isInEditFooterLocation, !isInEditFooterLocation]

    return { isAddImgRequired, isInputVisible }
}
