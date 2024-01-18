import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MESSAGES_ROUTE } from "../../utils/consts";
import Toggle from "../toggle/Toggle";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useContext } from "react";
import { Context } from "../../Context";

export default function UserContent() {

    const { langSet, lang, themeSet, theme } = useContext(Context)

    return (
        <>
            {/* Toggle needs Link to work */}
            <Link>
                <Toggle
                    name="lang"
                    on={<span className="poa r4 t4">EN</span>}
                    onValue="en"
                    off={<span className="poa l4 t4">CH</span>}
                    offValue="ch"
                    stateSetter={langSet}
                    defaultValue={lang}
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
            <Link to={MESSAGES_ROUTE}>
                <Button style={{ marginBottom: 10 }} variant='outlined'>coaching</Button>
            </Link>
        </>
    )
}
