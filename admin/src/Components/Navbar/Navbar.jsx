import React, {  useState } from 'react'
// import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/image.png'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {

  let [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <Link to='/' onClick={()=>{setMenu("shop")}} style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>TRENDSPIRE</p>
      </Link>
     {/* <img src={logo} className='nav-logo' alt="logo" />
      <p>TRENDSPIRE</p> */}
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
