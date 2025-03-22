import React, { useState } from 'react';
import "./Login.css";
import { useHistory } from 'react-router-dom';


const Login = () => {

  // States to capture input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  // Function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form refresh
    
    // Simple validation
    if (!email || !password) {
      alert("Please fill in both Email and Password!");
      return;
    }
    
    // (Optional) You can add more validations here
    
    // If valid, redirect
    history.push("/");
  }

  return (
    <div className='login'>
        <div className='logo_img'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt="Amazon Logo" />
        </div>
        <div className='login_container'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <p className='E_M'>Email or mobile phone number</p>
            <input 
              type="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <div className='for_password'>
              <p>Password</p>
              <div className='forget_pass'>
                <p className='forgot_password'>Forgot your password?</p>
              </div>
            </div>
            <input 
              className='inp_pass' 
              type="password" 
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            
            <button type='submit' className='login_signinButton'>Login</button>
            
            <div className='keep_me_signed'>
              <input type="checkbox" id="keepSigned" />
              <label htmlFor="keepSigned">Keep me signed in</label>
            </div>
          </form>

          <div className='new_to_amazon'>
            <span className='new_to_amazon_text'>New to Amazon?</span>
          </div>
          <button className='login_registerButton'>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login;
