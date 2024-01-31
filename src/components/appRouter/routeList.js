import { ADD_COURSES, ADD_FAQ_ROUTE, ADD_POSTS_PAGE_ROUTE, ADD_POST_ROUTE, EDIT_FOOTER_PAGE_ROUTE, EDIT_POST_ROUTE, FAQ_ROUTE, MESSAGES_ROUTE, MESSAGE_ROUTE, NEWSLETTER_ROUTE, POST_ROUTE, SUPPORTS_ROUTE, SUPPORT_ROUTE } from "../../utils/consts";
import { MAIN_ROUTE } from "../../utils/consts";
import VerifyLoginToken from "../loginEmail/LoginEmailVerifyToken";
import MessagesRooms from "../messages/MessagesRooms";
import AllMsgsAndAddMsg from "../messages/AllMsgsAndAddMsg";
import AddFAQpage from "../pages/FAQpage/AddFAQpage";
import FAQpage from "../pages/FAQpage/FAQpage";
import AddCoursesPage from "../pages/addCourses/AddCoursesPage";
import AddPost from "../pages/addPosts/AddPost";
import AddPostsPage from "../pages/addPosts/AddPostsPage";
import MainPage from "../pages/main/MainPage";
import PostFullWrap from "../post/PostFullWrap";
import VerifyOrderToken from "../stripe/VerifyOrderToken";
import SupportRooms from "../support/SupportRooms";
import PaidSubscriptionMsgs from "../messages/PaidSubscriptionMsgs";
import SupportMsgs from "../support/SupportMsgs";
import Newsletter from "../newsletter/Newsletter";

export default [
	// ! VISITOR ROUTES
	{
		path: MAIN_ROUTE,
		element: <MainPage />,
		isPublic: true,
		isForUser: true,
		isForAdmin: true,
	},
	{
		path: POST_ROUTE,
		element: <PostFullWrap />,
		isPublic: true,
		isForUser: true,
		isForAdmin: true,
	},
	{
		path: "/verifyLoginToken/:token",
		element: <VerifyLoginToken />,
		isPublic: true,
		isForUser: true,
		isForAdmin: true,
	},
	{
		path: "/verifyOrderToken/:token",
		element: <VerifyOrderToken />,
		isPublic: true,
		isForUser: true,
		isForAdmin: true,
	},
	{
		path: FAQ_ROUTE,
		element: <FAQpage />,
		isPublic: true,
		isForUser: true,
		isForAdmin: true,
	},
	// ! USER ROUTES
	{
		path: MESSAGES_ROUTE,
		element: <MessagesRooms />,
		isPublic: false,
		isForUser: true,
		isForAdmin: true,
	},
	{
		path: SUPPORTS_ROUTE,
		element: <SupportRooms />,
		isPublic: false,
		isForUser: true,
		isForAdmin: true,
	},
	{
		path: MESSAGE_ROUTE,
		element: <PaidSubscriptionMsgs />,
		isPublic: false,
		isForUser: true,
		isForAdmin: true,
	},
	{
		path: SUPPORT_ROUTE,
		element: <SupportMsgs />,
		isPublic: false,
		isForUser: true,
		isForAdmin: true,
	},
	{
		path: NEWSLETTER_ROUTE,
		element: <Newsletter />,
		isPublic: false,
		isForUser: true,
		isForAdmin: true,
	},
	// !! ADMIN ROUTES
	// ! POST
	{
		path: ADD_POSTS_PAGE_ROUTE,
		element: <AddPostsPage postTypes={["tools", "books", "news"]} title="" />,
		isPublic: false,
		isForUser: false,
		isForAdmin: true,
	},
	{
		path: ADD_POST_ROUTE,
		element: <AddPost />,
		isPublic: false,
		isForUser: false,
		isForAdmin: true,
	},
	{
		path: EDIT_POST_ROUTE,
		element: <AddPost />,
		isPublic: false,
		isForUser: false,
		isForAdmin: true,
	},
	{
		path: ADD_COURSES,
		element: <AddCoursesPage />,
		isPublic: false,
		isForUser: false,
		isForAdmin: true,
	},
	{
		path: ADD_FAQ_ROUTE,
		element: <AddFAQpage />,
		isPublic: false,
		isForUser: false,
		isForAdmin: true,
	},
	// ? POST
]
