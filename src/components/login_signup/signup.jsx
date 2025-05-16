import React, { useState } from 'react';
import './signup.css';
        
const Signup = () =>  {

    const [action,setAction] = useState("Signup");
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==='Login'?<div></div> : <div className='input'>
                <input type='username' placeholder='Name'/>
            </div>}
            <div className='input'>
                <input type='email' placeholder='Email/Phone No'/>
            </div>
            <div className='input'>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        {action==="Signup"?<div></div>:<div className="forgot-password"><span>Forgot Password</span></div>
        }
        <div className="submit-container">
            
            <div className={action==='Login'?"submit-grey":"submit"} onClick={() => {setAction("Sign Up")}}>Signup</div>
            <div className={action==='Signup'?"submit-grey":"submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
    </div>
  );
}

export default Signup;