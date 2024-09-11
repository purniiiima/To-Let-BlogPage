import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import Avatar1 from '../images/avatar1.png'
import Avatar2 from '../images/avatar2.png'
import Avatar3 from '../images/avatar3.png'
import Avatar4 from '../images/avatar4.png'
import Avatar5 from '../images/avatar5.png'
import Avatar6 from '../images/avatar6.png' 

const authorsData = [
  {id: 1, avatar: Avatar1, name: 'Kumar Sambhavam', posts: 3},
  {id: 2, avatar: Avatar2, name: 'Khusi Roshyan', posts: 1},
  {id: 3, avatar: Avatar3, name: 'Charukeshi Waiker', posts: 4},
  {id: 4, avatar: Avatar4, name: 'Ananya Tiwari', posts: 2},
  {id: 5, avatar: Avatar5, name: 'Abhi Kumar', posts: 3},
  {id: 6, avatar: Avatar6, name: 'T.HemaMadhuri', posts: 2},
]

const Authors = () => {
  const [authors] = useState(authorsData)
  return (
    <section className="authors">
      {authors.length > 0 ? <div className="container authors__container">
        {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img src={avatar} alt= ""/>
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className='center'>No Users / Authors Found.</h2>}
    </section>
  )
}

export default Authors