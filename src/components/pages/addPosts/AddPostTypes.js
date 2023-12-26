export default function AddPostTypes({ postTypes, stateType, stateTypeSet }) {
    return (
        <div className='f g15 wfc m0a mt'>
            {postTypes.map(type_ => (
                <div className={`title2 ${stateType === type_ && "brand"}`} key={type_} onClick={() => stateTypeSet(type_)}>{type_}</div>
            ))}
        </div>
    )
}
