import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      
      <ul className="footer__categories">
        <li><Link to="/posts/categories/News and Events">News And Events</Link></li>
        <li><Link to="/posts/categories/Investments">Investment</Link></li>
        <li><Link to="/posts/categories/Business">Business</Link></li>
        <li><Link to="/posts/categories/LifeStyle">LifeStyle</Link></li>
      </ul>
      <div className="footer__copyright">
        <small>All Rights Reserved &copy: Copyright, To-Let Globe.</small>
      </div>
    </footer>
  )
}

export default Footer