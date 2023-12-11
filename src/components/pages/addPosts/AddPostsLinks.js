import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { ADD_POST_ROUTE, ADD_POSTS_ROUTE } from '../../../utils/consts'
import AddPost from './AddPost'

export default function AddPostsLinks() {

    const location = useLocation().pathname

    return (
        <>
            <div className='fcc g15'>
                <Link to={ADD_POST_ROUTE + "tools"} className={`tac mt ${location === ADD_POST_ROUTE + "tools" ? "fw600" : ""}`}>Add Tools</Link>
                <Link to={ADD_POST_ROUTE + "books"} className={`tac mt ${location === ADD_POST_ROUTE + "books" ? "fw600" : ""}`}>Add Books</Link>
                <Link to={ADD_POST_ROUTE + "news"} className={`tac mt ${location === ADD_POST_ROUTE + "news" ? "fw600" : ""}`}>Add News</Link>
            </div>

            {location !== ADD_POSTS_ROUTE &&
                <AddPost />
            }
        </>
    )
}
