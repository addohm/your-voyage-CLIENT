import { Button } from "@mui/material";
import { FAQ_ROUTE, MESSAGES_ROUTE, SUPPORTS_ROUTE } from "../../utils/consts";
import Link2 from "../other/Link2";
import t from "../../hooks/useT";
import UserSiteSettings from "./UserSiteSettings";

export default function UserContent() {
    return (
        <>
            <UserSiteSettings/>
            <Link2 to={MESSAGES_ROUTE}>
                <Button style={{ marginBottom: 10 }} variant='outlined'>{t("Courses")}</Button>
            </Link2>
            <Link2 to={SUPPORTS_ROUTE}>
                <Button style={{ marginBottom: 10 }} variant='outlined'>{t("Support")}</Button>
            </Link2>
            <Link2 to={FAQ_ROUTE}>
                <Button style={{ marginBottom: 10 }} variant='outlined'>{t("FAQ")}</Button>
            </Link2>
        </>
    )
}
