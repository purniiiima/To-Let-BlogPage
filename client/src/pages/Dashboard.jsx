import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import {Link} from 'react-router-dom'

const Dashboard = () => {
   // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState(DUMMY_POSTS)


  return (
    <section className="dashboard">
      {
        posts.length ? <div className="container dashboard__container">
          {
            posts.map(post => {
              return <article key={post.id} className='dashboard__post'>
                <div className="dashboard__post-info">
                  <div className="dashboard__post-thumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to={`/post/${post.id}`} className='btn sm'>View</Link>
                  <Link to={`/post/${post.id}/edit`} className='btn sm primary'>Edit</Link>
                  <Link to={`/post/${post.id}/delete`} className='btn sm danger'>Delete</Link>
                </div>
              </article>
            })
          }
        </div> : <h2 className='center'>You have no posts yet</h2>
      }
    </section>
  )
}

export default Dashboard