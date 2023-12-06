import Diamond from "./Diamond";

export default function Diamonds({ rotate, isScrolledToVeryBottom, className }) {
    return (
        <div className={className}>
            <Diamond top={100} right={100} rotate={rotate} changePoint={isScrolledToVeryBottom} />
            <Diamond top={200} right={400} rotate={rotate - 100} changePoint={isScrolledToVeryBottom} />
            <Diamond top={400} right={570} rotate={rotate + 90} changePoint={isScrolledToVeryBottom} />
            <Diamond top={800} right={800} rotate={rotate - 260} changePoint={isScrolledToVeryBottom} />
            <Diamond top={90} right={1000} rotate={rotate - 160} changePoint={isScrolledToVeryBottom} />
            <Diamond top={390} right={1200} rotate={rotate - 200} changePoint={isScrolledToVeryBottom} />
            <Diamond top={790} right={1500} rotate={rotate - 100} changePoint={isScrolledToVeryBottom} />
            <Diamond top={90} right={1520} rotate={rotate + 90} changePoint={isScrolledToVeryBottom} />
            <Diamond top={800} right={150} rotate={rotate - 220} changePoint={isScrolledToVeryBottom} />
        </div>
    )
}
