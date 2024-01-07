import { useContext } from "react";
import { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { Context } from "../../Context";
import routeList from "./routeList";

export default function useRoutes() {

	const { user } = useContext(Context)
	const [routes, routesSet] = useState([])
	const location = useLocation().pathname

	useEffect(() => {
		function defineRoutes() {
			routeList.map(({ path, element, isPublic, isForUser, isForAdmin }) => {
				if (isPublic && !user) {
					routesSet(prev => [...prev, <Route exact path={path} element={element} />])
				}
				if (isForUser && user) {
					routesSet(prev => [...prev, <Route exact path={path} element={element} />])
				}
				if (isForAdmin && (user?.role === "admin" || user?.role === "coach")) { // TODO !!! ?
					routesSet(prev => [...prev, <Route exact path={path} element={element} />])
				}
			})
		}

		defineRoutes()
	}, [user])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return (
		{ routes }
	)
}
