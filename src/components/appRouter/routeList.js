import { ADD_POSTS_ROUTE } from "../../utils/consts";
import { MAIN_ROUTE } from "../../utils/consts";
import AddPostsPage from "../pages/addPosts/AddPostsPage";
import MainPage from "../pages/addPosts/main/MainPage";

// todo 4
export default [
	// VISITOR ROUTES
	{
		path: MAIN_ROUTE,
		element: <MainPage />,
		isPublic: true,
		isForUser: true,
		isForAdmin: true,
	},
	// // USER ROUTES
	// {
	// 	path: "/",
	// 	element: ,
	// 	isPublic: false,
	// 	isForUser: true,
	// 	isForAdmin: true,
	// },
	// ADMIN ROUTES
	{
		path: ADD_POSTS_ROUTE,
		element: <AddPostsPage />,
		isPublic: true, // TODO !!! false
		isForUser: true, // TODO !!! false
		isForAdmin: true,
	},
]
