import React from 'react'
import logo from './../../assets/netflix.png'
import avatar from './../../assets/avatar.png'
import './NavBar.css'
import { useState ,useEffect} from 'react'
const NavBar = () => {
    const [state, setState] = useState()
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setState(true)
            }else{
                setState(false)
            }
        });
        return()=>{
            window.removeEventListener('scroll')
        }
       
    }, [])
    return (
        <div className={`nav-container ${state && "nav-black"}`}>
            <img className="netflix" src={logo} alt="" />
            
            <img className="avatar" src={avatar} alt="" />
            
        </div>
    )
}

export default NavBar
