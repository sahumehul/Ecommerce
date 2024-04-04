import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Nav.css"

export const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate()
  const logout =()=>{
    localStorage.clear();
    navigate("/signup")
  }
  return (
    <div>
        <ul className='nav-ul'>
        {/* <li><img src={logo} alt='logo'/></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li>{auth ?<Link to="/signup" onClick={logout}>Logout</Link> : <Link to="/signup">Signup</Link>}</li>
        </ul>
    </div>
  )
}
