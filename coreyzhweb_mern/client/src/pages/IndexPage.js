import { useEffect, useState } from "react";
import Post from "../Post";
import streetwear from "../../src/images/streetwear.jpg"
import smartcasual from "../../src/images/smartcasual.jpg"
import knittedwear from "../../src/images/knit.jpg"
import outerwear from "../../src/images/outerwear.jpg"

import './stylesgrid.css'
import '../../src/App.css'
import { Link } from "react-router-dom";


export default function IndexPage() {
  
  return (
    <div className="styles-grid-container">
    <section className="styles-grid">
            <Link to="/streetwear " style={{textDecoration: 'none'}}>
                <div className="style-container">
                    <div className="image-row">
                        <img className="style-container-image" src={streetwear} />
                    </div>
                    
                    <div className="style-container-text">
                        <p className="style-container-text">Streetwear</p>
                        <p className="style-container-description">Graphic tees, Cargos, Parachute Pants and More</p>
                    </div>
                   
                </div>
            </ Link>
            <Link to="/smartcasual" style={{textDecoration: 'none'}}>
                <div className="style-container">
                    <div className="image-row">
                        <img className="style-container-image" src={smartcasual} />
                    </div>
                    <div className="style-container-text">
                        <p className="style-container-text">Smart Casual</p>
                        <p className="style-container-description">Button-ups, Pleated Pants, Jackets and More</p>
                    </div>
                </div>
            </Link>
            <Link to="/knittedwear" style={{textDecoration: 'none'}}>
                <div className="style-container">
                    <div className="image-row">
                        <img className="style-container-image" src={knittedwear} />
                    </div>
                    <div className="style-container-text">
                        <p className="style-container-text">Knitted Wear</p>
                        <p className="style-container-description">Oversized Knitted Sweaters, Knitted Tops and More</p>
                    </div>
                </div>
            </Link>
            
            <Link to="/outerwear" style={{textDecoration: 'none'}}>
                <div className="style-container">
                    <div className="image-row">
                        <img className="style-container-image" src={outerwear} />
                    </div>
                    <div className="style-container-text">
                        <p className="style-container-text">Outerwear</p>
                        <p className="style-container-description">Windbreakers, Hoodies, Parachute Pants and More</p>
                    </div>
                </div>
            </Link>
            
    </section>
    </div>

    
   
  );
}