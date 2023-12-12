import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function PostFullLink({ link }) {
    return (
        <Link to={link}>
            <Button variant="contained">EXPLORE</Button>
        </Link>
    )
}