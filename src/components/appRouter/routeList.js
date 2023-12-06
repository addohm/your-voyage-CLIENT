import { ADD_BOOKS_ROUTE, ADD_NEWS_ROUTE, ADD_POSTS_ROUTE, ADD_TOOLS_ROUTE } from "../../utils/consts";
import { MAIN_ROUTE } from "../../utils/consts";
import AddPostsLinks from "../pages/addPosts/AddPostsLinks";
import AddPostsPage from "../pages/addPosts/AddPostsPage";
import MainPage from "../pages/addPosts/main/MainPage";

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
	{
		path: ADD_TOOLS_ROUTE,
		element: <AddPostsLinks />,
		isPublic: true, // TODO !!! false
		isForUser: true, // TODO !!! false
		isForAdmin: true,
	},
	{
		path: ADD_BOOKS_ROUTE,
		element: <AddPostsLinks />,
		isPublic: true, // TODO !!! false
		isForUser: true, // TODO !!! false
		isForAdmin: true,
	},
	{
		path: ADD_NEWS_ROUTE,
		element: <AddPostsLinks />,
		isPublic: true, // TODO !!! false
		isForUser: true, // TODO !!! false
		isForAdmin: true,
	},
]
