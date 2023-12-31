import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { ADD_POSTS_PAGE_ROUTE, ADD_PRIVACY_ROUTE, ADD_TERMS_ROUTE } from '../../utils/consts'
import useGetLastTermsOrPrivacyId from '../footer/useGetLastTermsOrPrivacyId'
import For from '../other/For'

export default function AdminAddContent() {

    const lastTermsId = useGetLastTermsOrPrivacyId("terms")
    const lastPrivacyId = useGetLastTermsOrPrivacyId("privacy")
    const termsRoute = !lastTermsId ? ADD_TERMS_ROUTE : `/post/terms/${lastTermsId}`
    const privacyRoute = !lastPrivacyId ? ADD_PRIVACY_ROUTE : `/post/privacy/${lastPrivacyId}`

    const list = [
        {
            route: ADD_POSTS_PAGE_ROUTE,
            title: "+ POSTS",
        },
        {
            route: termsRoute,
            title: "+ TERMS",
        },
        {
            route: privacyRoute,
            title: "+ PRIVACY",
        }
    ]

    return (
        <For role="admin">
            {list.map(({ route, title }) => (
                <Link to={route}>
                    <Button style={{ marginBottom: 10 }} variant='outlined'>{title}</Button>
                </Link>
            ))}
        </For>
    )
}
