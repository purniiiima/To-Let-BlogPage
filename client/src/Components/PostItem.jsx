import React from 'react'
import {Link} from "react-router-dom"
import PostAuthor from './PostAuthor'

const PostItem = ({postId, category, title, description, authorID, thumbnail}) => {
    const shortDescription = description.length > 150? description.substr(0,150) + '...' : description;
    const postTitle = title.length > 40? title.substr(0,40) + '...' : title;
  return (
    <article className="post">
        <div className="post__thumbnail">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post__content">
            <Link to={`/posts/${postId}`}>
                <h1>{postTitle}</h1>
            </Link>
            <p>{shortDescription}</p>
            <div className="post__footer">
                <PostAuthor />
                <Link to={`/posts/categories/${category}`} className='category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem