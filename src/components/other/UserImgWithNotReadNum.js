export default function UserImgWithNotReadNum({ img, notReadNum, imgClassName, numClassName }) {
    return (
        <>
            {notReadNum > 0 && <div className={`poa l4 t0 fcc bg_brand white br50 ${numClassName}`}>{notReadNum}</div>}
            <img className={`br50 ${imgClassName}`} src={img} />
        </>
    )
}
