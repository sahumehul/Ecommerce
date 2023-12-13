import React from 'react'
import { Link } from 'react-router-dom';
// import logo from './e-comm.jpg'
import "./Nav.css"

export const Nav = () => {
  const auth = localStorage.getItem("user");
  return (
    <div>
        <ul className='nav-ul'>
        {/* <li><img src={logo} alt='logo'/></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li>{auth ?<Link to="/logout">Logout</Link> : <Link to="/signup">Signup</Link>}</li>
        </ul>
    </div>
  )
}
