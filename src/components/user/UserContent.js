import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { MAIN_ROUTE, MESSAGES_ROUTE } from "../../utils/consts";
import Toggle from "../toggle/Toggle";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useContext } from "react";
import { Context } from "../../Context";
import Link2 from "../other/Link2";
import t from "../../hooks/useT";

export default function UserContent() {

    const { langSet, lang, themeSet, theme } = useContext(Context)
    const location = useLocation().pathname

    function goToMainPageIfInPostLocation() {
        // if user already sees english post go to main page to rerender Links that will lead to new chinese posts
        // posts: (tools, books, news, terms, privacy), (courses, faq)
        // each post when created can have 2 languages depending on the lang selected (in Menu) while creating the post
        if (!location.includes("/post/")) return
        window.location.href = MAIN_ROUTE
    }

    return (
        <>
            {/* Toggle needs Link to work */}
            <Link>
                <Toggle
                    name="lang"
                    on={<span className="poa r4 t4">EN</span>}
                    onValue="en"
                    off={<span className="poa l4 t4">ZH</span>}
                    offValue="zh"
                    stateSetter={langSet}
                    defaultValue={lang}
                    onToggle={goToMainPageIfInPostLocation}
                />
                <Toggle
                    name="theme"
                    on={<LightMode className="poa r4 t4" />}
                    onValue="light"
                    off={<DarkMode className="poa l4 t4" />}
                    offValue="dark"
                    stateSetter={themeSet}
                    defaultValue={theme}
                />
            </Link>
            <Link2 to={MESSAGES_ROUTE}>
                <Button style={{ marginBottom: 10 }} variant='outlined'>{t("messages")}</Button>
            </Link2>
        </>
    )
}
