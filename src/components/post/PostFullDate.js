import React from 'react'
import timestampToDate from '../../utils/timestampToDate'

export default function PostFullDate({ updatedAt, isVisible = true }) {
    return (
        isVisible &&
        <div className="mla ls1">{timestampToDate(updatedAt)}</div>
    )
}
