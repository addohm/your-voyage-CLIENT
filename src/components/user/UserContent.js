import { Button } from "@mui/material";
import { FAQ_ROUTE, MESSAGES_ROUTE, SUPPORTS_ROUTE } from "../../utils/consts";
import Link2 from "../other/Link2";
import t from "../../hooks/useT";
import UserSiteSettings from "./UserSiteSettings";
import { useContext } from "react";
import { Context } from "../../Context";

export default function UserContent() {

    const { theme } = useContext(Context)
    const buttonThemeClassName = `${theme === "dark" ? "cursorArrowRightWhite" : "cursorArrowRightBlack"}`

    return (
        <>
            <UserSiteSettings />
            <Link2 to={MESSAGES_ROUTE}>
                <Button className={buttonThemeClassName} style={{ marginBottom: 10 }} variant='outlined'>{t("Courses")}</Button>
            </Link2>
            <Link2 to={SUPPORTS_ROUTE}>
                <Button className={buttonThemeClassName} style={{ marginBottom: 10 }} variant='outlined'>{t("Support")}</Button>
            </Link2>
            <Link2 to={FAQ_ROUTE}>
                <Button className={buttonThemeClassName} style={{ marginBottom: 10 }} variant='outlined'>{t("FAQ")}</Button>
            </Link2>
        </>
    )
}
