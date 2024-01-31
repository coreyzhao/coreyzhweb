import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import './bottom.css'
import insta  from "../src/images/insta.png"
import tiktok from "../src/images/tiktok.png"
import youtube from "../src/images/youtube.png"


export default function Bottom() {
  return (
    <section className="bottom-page">
        <div className="bottom-styles">
            <div><p className="bottom-page-title">STYLES</p></div>
            <div className="bottom-page-container-styles">
                <Link to="/streetwear" style={{textDecoration: 'none'}}><p className="bottom-page-text">Streetwear</p></Link>
                <Link to="/smartcasual" style={{textDecoration: 'none'}}><p className="bottom-page-text">Smart Casual</p></Link>
                <Link to="/knittedweat" style={{textDecoration: 'none'}}><p className="bottom-page-text">Knitted Wear</p></Link>
                <Link to="/outerwear" style={{textDecoration: 'none'}}><p className="bottom-page-text">Outerwear</p></Link>
            
               
            </div>
            <div><p className="bottom-page-title">ACCESSORIES</p></div>
            <div className="bottom-page-container-accessories">
                <p className="bottom-page-text">Coming Soon</p>
                <p className="bottom-page-text">Coming Soon</p>
        
            </div>
        </div>
        <div className="socials-container">
            <a href="https://www.instagram.com/coreyzh_/" target="_blank"><img className="socials-images" src={insta}/></a>
            <a href="https://www.tiktok.com/@corey.zh?is_from_webapp=1&sender_device=pc" target="_blank"><img className="socials-images" src={tiktok}/></a>
            <a href="https://www.youtube.com/channel/UCby8pCwoSRFggkmQDk4IP8w" target="_blank"><img className="socials-images" src={youtube}/></a>
        </div>
        <div className="bottom-description-container">
            <p className="bottom-description-text">coreyzh.inquiries@gmail.com</p>
        </div>
    </section>
  )
  

  
}