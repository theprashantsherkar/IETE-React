import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
      <nav className="flex items-center justify-center gap-7">
          <Link to={'/'}>Home</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>Signup</Link>
    </nav>
  )
}

export default Navbar