import { ADD_POSTS_PAGE_ROUTE, ADD_POST_ROUTE, EDIT_FOOTER_PAGE_ROUTE, EDIT_POST_ROUTE, POST_ROUTE } from "../../utils/consts";
import { MAIN_ROUTE } from "../../utils/consts";
import AddPost from "../pages/addPosts/AddPost";
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
		path: POST_ROUTE,
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
	// !! ADMIN ROUTES
	// ! POST
	{
		path: ADD_POSTS_PAGE_ROUTE,
		element: <AddPostsPage postTypes={["tools", "books", "news"]} title="Add Posts" />,
		isPublic: true, // TODO !!! false
		isForUser: true, // TODO !!! false
		isForAdmin: true,
	},
	{
		path: ADD_POST_ROUTE,
		element: <AddPost />,
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
	// ? POST
	{
		path: EDIT_FOOTER_PAGE_ROUTE,
		element: <AddPostsPage postTypes={["terms", "privacy"]} title="Add To Footer" ignoreInputs={["title", "link"]} ignoreImg={true} />,
		isPublic: true, // TODO !!! false
		isForUser: true, // TODO !!! false
		isForAdmin: true,
	},
]
