import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { ADD_POSTS_PAGE_ROUTE } from '../../utils/consts'
import useGetLastTermsOrPrivacyId from '../footer/useGetLastTermsOrPrivacyId'

export default function AdminAddContent() {

    const lastTermsId = useGetLastTermsOrPrivacyId("terms")
    const lastPrivacyId = useGetLastTermsOrPrivacyId("privacy")

    const list = [
        {
            route: ADD_POSTS_PAGE_ROUTE,
            title: "+ POSTS",
        },
        {
            route: `/terms/${lastTermsId}`,
            title: "+ TERMS",
        },
        {
            route: `/privacy/${lastPrivacyId}`,
            title: "+ PRIVACY",
        }
    ]

    return (
        list.map(({ route, title }) => (
            <Link to={route} className='mb'>
                <Button variant='outlined'>{title}</Button>
            </Link>
        ))
    )
}
