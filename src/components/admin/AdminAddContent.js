import { Button } from '@mui/material'
import { ADD_COURSES, ADD_POSTS_PAGE_ROUTE, ADD_PRIVACY_ROUTE, ADD_TERMS_ROUTE, ADD_FAQ_ROUTE } from '../../utils/consts'
import useGetLastTermsOrPrivacyId from '../footer/useGetLastTermsOrPrivacyId'
import For from '../other/For'
import Link2 from '../other/Link2'
import t from '../../hooks/useT'

export default function AdminAddContent() {

    const lastTermsId = useGetLastTermsOrPrivacyId("terms")
    const lastPrivacyId = useGetLastTermsOrPrivacyId("privacy")
    const termsRoute = !lastTermsId ? ADD_TERMS_ROUTE : `/post/terms/${lastTermsId}`
    const privacyRoute = !lastPrivacyId ? ADD_PRIVACY_ROUTE : `/post/privacy/${lastPrivacyId}`

    const list = [
        {
            route: ADD_COURSES,
            title: `+ ${t("Courses")} `,
        },
        {
            route: ADD_POSTS_PAGE_ROUTE,
            title: `+ ${t("posts")} `,
        },
        {
            route: ADD_FAQ_ROUTE,
            title: `+ ${t("FAQ")} `,
        },
        {
            route: termsRoute,
            title: `+ ${t("terms")} `,
        },
        {
            route: privacyRoute,
            title: `+ ${t("privacy")} `,
        }
    ]

    return (
        <For role="admin">
            <hr className="mt15 mb15"></hr>
            {list.map(({ route, title }) => (
                <Link2 to={route}>
                    <Button style={{ marginBottom: 10 }} variant='outlined'>{title}</Button>
                </Link2>
            ))}
        </For>
    )
}
