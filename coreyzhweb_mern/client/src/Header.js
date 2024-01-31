import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import './header.css'
import { UserContext } from "./UserContext";


export default function Header() {
  
  const {setUserInfo, userInfo} = useContext(UserContext);

  

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
      })
    })
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null);

    
  }

  const username = userInfo?.username;

  // setUserInfo(null);
  

  return (
    
    <div className="header">
        <div className="left-section">
            
          <Link to="/ForumPage" style={{textDecoration: 'none'}}><p className="styles-text">FORUMS</p></Link>
        
        </div>
        <div className="middle-section">
            
            <div className="coreyzh-text"><Link to="/ " style={{textDecoration: 'none'}}>coreyzh</Link></div>
            
        </div>
        <div className="right-section">
          
        
          {username && (
            <>
              <Link to="/create" style={{textDecoration: 'none'}}>
                <div className="favorites-container">
                    
                    <button className="create-button js-favorites-button">CREATE FORUM POST</button>
                </div>
              </Link>
              <a onClick={logout}>
                <div className="favorites-container">
                  <button className="search-button js-search-button"><p className="signup">LOGOUT ({username}) </p></button>
                </div>
              </a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login" style={{textDecoration: 'none'}}>
                <div className="favorites-container">
                    
                    <button className="favorites-button js-favorites-button"><Link to="/login" style={{textDecoration: 'none'}}>LOGIN</Link></button>
                </div>
              </Link>
              <div className="search-container">
                <Link to="/signup" style={{textDecoration: 'none'}}>
                  <div className="favorites-container">
                    <button className="search-button js-search-button"><p className="signup">SIGN UP</p></button>
                  </div>
                </Link>
              </div>
              
            </>
          )}
      
             
            
        </div>
    </div>
  
  )
}