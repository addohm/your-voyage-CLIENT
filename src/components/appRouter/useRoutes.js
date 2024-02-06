import { useContext } from "react";
import { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { Context } from "../../Context";
import routeList from "./routeList";
import useHasPurchaseChangeMainPage from "./useHasPurchaseChangeMainPage";
import useLoginDialog from "../dialog/useLoginDialog";

export default function useRoutes() {

	const { user } = useContext(Context)
	const [routes, routesSet] = useState([])
	const location = useLocation().pathname
	const { defineMainPage } = useHasPurchaseChangeMainPage({ user, location })
	const { showLoginDialog } = useLoginDialog()

	useEffect(() => {
		function defineRoutes() {
			routeList.map(({ path, element, isPublic, isForUser, isForAdmin }) => {
				if (isPublic && !user) {
					routesSet(prev => [...prev, <Route exact path={path} element={element} />])
				}
				if (isForUser && user) {
					routesSet(prev => [...prev, <Route exact path={path} element={element} />])
				}
				if (isForAdmin && (user?.role === "admin")) { // maybe: || user?.role === "coach"
					routesSet(prev => [...prev, <Route exact path={path} element={element} />])
				}

				// show login dialog for NOT public pages and NOT logged in user
				if ((isForUser || isForAdmin) && !user) {
					if (isPublic) return
					if (path !== location) return
					showLoginDialog()
				}
			})
		}

		defineRoutes()
		defineMainPage()
	}, [user, location])

	useEffect(() => {
		setTimeout(() => window.scrollTo(0, 0), 1)
	}, [location])

	return (
		{ routes }
	)
}
