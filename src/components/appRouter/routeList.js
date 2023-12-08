import { ADD_POSTS_ROUTE, ADD_POST_ROUTE, EDIT_POST_ROUTE, TOOL_ROUTE } from "../../utils/consts";
import { MAIN_ROUTE } from "../../utils/consts";
import AddPost from "../pages/addPosts/AddPost";
import AddPostsLinks from "../pages/addPosts/AddPostsLinks";
import AddPostsPage from "../pages/addPosts/AddPostsPage";
import MainPage from "../pages/main/MainPage";
import PostFull from "../post/PostFull";

export default [
	// VISITOR ROUTES
	{
		path: MAIN_ROUTE,
		element: <MainPage />,
		isPublic: true,
		isForUser: true,
		isForAdmin: true,
	},
	{
		path: TOOL_ROUTE,
		element: <PostFull />,
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
	// ! ADMIN ROUTES
	{
		path: ADD_POSTS_ROUTE,
		element: <AddPostsPage />,
		isPublic: true, // TODO !!! false
		isForUser: true, // TODO !!! false
		isForAdmin: true,
	},
	{
		path: ADD_POST_ROUTE,
		element: <AddPostsLinks />,
		isPublic: true, // TODO !!! false
		isForUser: true, // TODO !!! false
		isForAdmin: true,
	},
	{
		path: EDIT_POST_ROUTE,
		element: <AddPost />,
		isPublic: true, // TODO !!! false
		isForUser: true, // TODO !!! false
		isForAdmin: true,
	},
]
