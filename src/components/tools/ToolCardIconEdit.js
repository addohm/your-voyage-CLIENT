import React from 'react'
import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function ToolCardIconEdit({ type, _id }) {

    const navigate = useNavigate()

    function editPost(e) {
        e.preventDefault()
        e.stopPropagation()
        navigate(`/edit/${type}/${_id}`)
    }

    return (
        <Edit style={{ height: 30, width: 30 }} onClick={(e) => editPost(e)} />
    )
}
