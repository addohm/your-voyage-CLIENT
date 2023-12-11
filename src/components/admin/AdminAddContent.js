import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { ADD_POSTS_ROUTE } from '../../utils/consts'

export default function AdminAddContent() {
    return (
        <Link to={ADD_POSTS_ROUTE}>
            <Button
                className='mb'
                variant='outlined'
            >
                + posts
            </Button>
        </Link>
    )
}