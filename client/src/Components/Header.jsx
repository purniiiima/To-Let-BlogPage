import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__logo'>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className={`nav__menu ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/profile/shtrh">Kumar Sambhavnam</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <button className="nav__toggle-btn" onClick={handleToggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Header