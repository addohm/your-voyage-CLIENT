import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { ADD_TOOLS_ROUTE, ADD_BOOKS_ROUTE, ADD_NEWS_ROUTE } from '../../../utils/consts'
import AddPost from './AddPost'

export default function AddPostsLinks() {

    const location = useLocation().pathname

    return (
        <>
            <div className='fcc g15'>
                <Link to={ADD_TOOLS_ROUTE} className={`tac mt ${location === ADD_TOOLS_ROUTE ? "fw600" : ""}`}>Add Tools</Link>
                <Link to={ADD_BOOKS_ROUTE} className={`tac mt ${location === ADD_BOOKS_ROUTE ? "fw600" : ""}`}>Add Books</Link>
                <Link to={ADD_NEWS_ROUTE} className={`tac mt ${location === ADD_NEWS_ROUTE ? "fw600" : ""}`}>Add News</Link>
            </div>
            <AddPost />
        </>
    )
}
