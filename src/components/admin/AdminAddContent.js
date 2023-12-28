import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { ADD_POSTS_PAGE_ROUTE } from '../../utils/consts'
import useGetLastTermsOrPrivacyId from '../footer/useGetLastTermsOrPrivacyId'
import ForAdmin from './ForAdmin'

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
        <ForAdmin>
            {list.map(({ route, title }) => (
                <Link to={route}>
                    <Button style={{ marginBottom: 10 }} variant='outlined'>{title}</Button>
                </Link>
            ))}
        </ForAdmin>
    )
}
