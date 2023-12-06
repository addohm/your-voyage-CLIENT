import React from "react"
import { Routes } from "react-router-dom"
import useRoutes from "./useRoutes"

export default function AppRouter() {

	const { routes } = useRoutes()

	return (
		<Routes>
			{routes.map((route, ind) => <React.Fragment key={ind}>{route}</React.Fragment>)}
		</Routes>
	)
}