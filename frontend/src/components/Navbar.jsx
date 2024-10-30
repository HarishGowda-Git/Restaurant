import React from 'react'
import '../assets/Css/Navbar.css'
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" width={200} style={{marginLeft:"10px",marginTop:"10px"}}/>
            <button id='signup'>Sign-up</button>
        </div>
    )
}

export default Navbar