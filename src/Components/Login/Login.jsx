import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const Login = () => {
    return (
        <div>
         <div className="header">
            <NavBar />
         </div>
         <div className="showcase">
         <div class="showcase-content">
            
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>All of Netflix, starting at just ₹ 199.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <Link className="link-button" to='/netflix'>Get Started</Link>
           
        </div>


         </div>
            
        </div>
    )
}

export default Login;

{/* <header class="showcase">
<div class="showcase-top">
    <img src="" alt="Netflix Logo">
    <a href="#" class="btn btn-rounded">Sign In</a>
</div>
<div class="showcase-content">
    <h1>Unlimited movies, TV shows and more.</h1>
    <h3>All of Netflix, starting at just ₹ 199.</h3>
    <p>Ready to watch? Enter your email to create or restart your membership.</p>
    <input type="email" name="email" id="mail" placeholder="Email address">
    <a href="#" class="btn btn-lg">GET STARTED ></a>
</div>
</header> */}