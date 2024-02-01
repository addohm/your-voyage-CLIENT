import React from 'react'
import timestampToDate from '../../utils/timestampToDate'

export default function PostFullDate({ updatedAt, isVisible = true }) {

    if (!updatedAt) return

    return (
        isVisible &&
        <div className="mla ls1">{timestampToDate(updatedAt)}</div>
    )
}
