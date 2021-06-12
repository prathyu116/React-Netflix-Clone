import React,{useState} from 'react'
import './Login.css'
import NavBar from '../NavBar/NavBar'
import {SpinnerRoundOutlined} from 'react-spinners'

const Login = () => {
    const [isLoading,setIsLoading]=useState(false)
    
    
    return isLoading ?(
        // <SpinnerRoundOutlined size={90} thickness={176} speed={126} color="rgba(57, 172, 166, 1)" />
        <h1 style={{backgroundColor:'red'}}>Loassssssssss</h1>

    )
    
        
    :
    
    (
        <div>
         <div className="header">
            <NavBar />
         </div>
         <div className="showcase">
         <div class="showcase-content">
            
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>All of Netflix, starting at just ₹ 199.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            {/* <Link className="link-button" to='/netflix'>Get Started</Link> */}
            <a onClick={()=>setIsLoading(true)} className="link-button" href="/netflix">SignIn</a>
           
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