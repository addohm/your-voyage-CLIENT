import { Link } from "react-router-dom";
import Toggle from "../toggle/Toggle";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useContext } from "react";
import { Context } from "../../Context";
import { useLocation } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/consts";

export default function UserSiteSettings({ isVisible = true, className = "" }) {

  const { langSet, lang, themeSet, theme } = useContext(Context)
  const location = useLocation().pathname

  function goToMainPageIfInPostLocation() {
    // if user already sees english post go to main page to rerender Links that will lead to new chinese posts
    // posts: (tools, books, news, terms, privacy), (courses, faq)
    // each post when created can have 2 languages depending on the lang selected (in Menu) while creating the post
    if (!location.includes("/post/")) return
    window.location.href = MAIN_ROUTE
  }

  {/* ! Toggle needs Link to work */ }
  return (
    isVisible &&
    <Link className={className}>
      <Toggle
        name="lang"
        on={<span className="poa r4 t4 hoverBrandColor">EN</span>}
        onValue="en"
        off={<span className="poa l4 t4 hoverBrandColor">ZH</span>}
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
  )
}
