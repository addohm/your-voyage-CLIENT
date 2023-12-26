import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import list from './list'

export default function AdminAddContent() {
    return (
        list.map(({ route, title }) => (
            <Link to={route} className='mb'>
                <Button variant='outlined'>{title}</Button>
            </Link>
        ))
    )
}
