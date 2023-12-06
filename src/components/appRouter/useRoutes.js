import { useContext } from "react";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Context } from "../../Context";
import routeList from "./routeList";

export default function useRoutes() {

	const { user } = useContext(Context)
	const [routes, routesSet] = useState([])

	useEffect(() => {
		function defineRoutes() {
			routeList.map(({ path, element, isPublic, isForUser, isForAdmin }) => {
				if (isPublic && !user) {
					routesSet(prev => [...prev, <Route exact path={path} element={element} />])
				}
				if (isForUser && user) {
					routesSet(prev => [...prev, <Route exact path={path} element={element} />])
				}
				if (isForAdmin && user?.isAdmin) {
					routesSet(prev => [...prev, <Route exact path={path} element={element} />])
				}
			})
		}

		defineRoutes()
	}, [user])

	return (
		{ routes }
	)
}
