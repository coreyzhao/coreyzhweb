import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function signup(ev) {
    ev.preventDefault();

    
    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'}
    });
    if (response.status === 200) {
      alert('registration succesful')
    } else {
      alert('registration failed')
    }
    
    
  }
  

  return (
    <form className="login-popup" onSubmit={signup}>
            <div className="login-description">
                <p className="signin-text">sign up menu !</p>
                <p className="signin-description-text">Become a Member: save your favorite fits to your profile</p>
            </div>
            <div className="login-inputs">
                <p className="input-name" >Username*</p>
                <input className="input-bar input-email" 
                  type="text"
                  placeholder="Enter Username Here " 
                  value= {username} 
                  onChange={ev => setUsername(ev.target.value)} />
            </div>
            <div className="login-inputs">
                <p className="input-name" >Password*</p>
                <input className="input-bar input-password" 
                type="password"
                  placeholder="Enter Password Here" 
                  value = {password}
                  onChange={ev => setPassword(ev.target.value)}/>
                
            </div>
            <div className="login-options">
                <div className="login-button-container">
                    <button className="signin-button">Sign up</button>
                </div>
            </div>
            <Link to="/login" style={{textDecoration: 'none'}}>
            <div className="login-button-container">
                <button className="create-account-button js-create-account-button">Already have an account?</button>
            </div>
            </Link>
            
        </form>
  );
}