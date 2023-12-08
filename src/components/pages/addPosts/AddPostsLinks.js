import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { ADD_POST_ROUTE, ADD_POSTS_ROUTE } from '../../../utils/consts'
import AddPost from './AddPost'

export default function AddPostsLinks() {

    const location = useLocation().pathname

    return (
        <>
            <div className='fcc g15'>
                <Link to={ADD_POST_ROUTE + "tool"} className={`tac mt ${location === ADD_POST_ROUTE + "tool" ? "fw600" : ""}`}>Add Tools</Link>
                <Link to={ADD_POST_ROUTE + "book"} className={`tac mt ${location === ADD_POST_ROUTE + "book" ? "fw600" : ""}`}>Add Books</Link>
                <Link to={ADD_POST_ROUTE + "new"} className={`tac mt ${location === ADD_POST_ROUTE + "new" ? "fw600" : ""}`}>Add News</Link>
            </div>

            {location !== ADD_POSTS_ROUTE &&
                <AddPost />
            }
        </>
    )
}
