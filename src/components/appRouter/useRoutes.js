import { useContext } from "react";
import { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { Context } from "../../Context";
import routeList from "./routeList";
import useHasPurchaseChangeMainPage from "./useHasPurchaseChangeMainPage";

export default function useRoutes() {

	const { user } = useContext(Context)
	const [routes, routesSet] = useState([])
	const location = useLocation().pathname
	const { defineMainPage } = useHasPurchaseChangeMainPage({ user, location })

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
			})
		}

		defineRoutes()
		defineMainPage()
	}, [user])

	useEffect(() => {
		setTimeout(() => window.scrollTo(0, 0), 1)
	}, [location])

	return (
		{ routes }
	)
}
