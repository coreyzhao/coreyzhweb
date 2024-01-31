import React, { useContext, useEffect, useState } from "react";
import {Navigate} from "react-router-dom";
import "./login.css"
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext)

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},

      //check the cookie
      credentials: 'include',
  });

  //set redirect as true if response is ok
  if (response.ok) {
    response.json().then(userInfo => {
      setUserInfo(userInfo);
      setRedirect(true);
    })
  } else {
    alert('wrong credentials')
  }

  };
    if (redirect) {
      return <Navigate to={'/'} />
    }

    return (
        <form className="login-popup" onSubmit={login}>
            <div className="login-description">
                <p className="signin-text">login menu !</p>
                <p className="signin-description-text">Become a Member: save your favorite fits to your profile</p>
            </div>
            <div className="login-inputs">
                <p className="input-name" >Username</p>
                <input className="input-bar input-email" 
                type="text"
                placeholder="Enter Username Here "
                value={username} 
                onChange={ev => setUsername(ev.target.value)} />
            </div>
            <div className="login-inputs">
                <p className="input-name" >Password*</p>
                <input className="input-bar input-password" 
                type = "password"
                placeholder="Enter Password Here" 
                value={password}
                onChange={ev => setPassword(ev.target.value)}></input>
                
            </div>
            <div className="login-options">
                <div className="login-button-container">
                    <button className="signin-button">Sign in</button>
                </div>
            </div>
            <Link to="/signup" style={{textDecoration: 'none'}}>
            <div className="login-button-container">
                <button className="create-account-button js-create-account-button">Create a new account</button>
            </div>
            </Link>
        </form>
    
    );
  }