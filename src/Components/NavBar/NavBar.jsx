import React from 'react'
import logo from './../../assets/netflix.png'
import avatar from './../../assets/avatar.png'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className="nav-container">
            <img className="netflix" src={logo} alt="" />
            
            <img className="avatar" src={avatar} alt="" />
            
        </div>
    )
}

export default NavBar
