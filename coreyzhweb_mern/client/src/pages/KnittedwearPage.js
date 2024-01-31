import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./tiktokgrid.css"
import "./stylesgrid.css"
import graphictee from "../../src/pages/tiktoks/graphic-tee.mp4"
import jorts from "../../src/pages/tiktoks/jorts.mp4"
import blacklightblue from "../../src/pages/tiktoks/black-lightblue.mp4"
import grpteecargos from "../../src/pages/tiktoks/grptee-cargos.mp4"
import grpteecarpenters from "../../src/pages/tiktoks/grptee-carpenters.mp4"
import grpteelong from "../../src/pages/tiktoks/grptee-long.mp4"
import fit1 from "../../src/pages/tiktoks/fit1.mp4"
// import graphictee from "../../src/pages/tiktoks/graphic-tee.mp4"
// import graphictee from "../../src/pages/tiktoks/graphic-tee.mp4"

export default function KnittedwearPage() {
  
  return (
    <section className="tiktok-grid">
        <div className="tiktok-preview 071923">
            <div className="tiktok-video-container">
                <video className="tiktok-video" width="300px" height="300px" autoplay loop muted>
                    <source src={graphictee} />
                </video>
            </div>
            <div className="tiktok-description-container">
                <div className="tiktok-description">
                    <p className="tiktok-description-title">FEATURED</p>
                    <p className="tiktok-description-subtitle">07-19-2023</p>
                    <hr className="line" />
                    <a href="https://renaissancequebec.ca/en/" target="_blank"><p className="tiktok-description-text">Thrifted Graphic-tee</p></a>
                    <a href="https://www.urbanoutfitters.com/en-ca/shop/urban-renewal-vintage-overdyed-wind-pant2?category=SEARCHRESULTS&color=001&searchparams=q%3Dpants%2520renewal%2520black&type=REGULAR&size=ONE%20SIZE&quantity=1" target="_blank"><p className="tiktok-description-text">Parachute Pants</p></a>
                    <a href="https://oldnavy.gapcanada.ca/browse/product.do?pid=209763#pdp-page-content" target="_blank"><p className="tiktok-description-text">Tank Top</p></a>
                    <a href="https://renaissancequebec.ca/en/" target="_blank"><p className="tiktok-description-text">Thrifted Crossbody Bag</p></a>
                    <hr className="line" />
                    
                </div>
            </div>
        </div>
        
        <div className="tiktok-preview">
            <div className="tiktok-video-container">
                <video className="tiktok-video" width="300px" height="300px" autoplay loop muted>
                    <source src={jorts} />
                </video>
            </div>
            <div className="tiktok-description-container">
                <div className="tiktok-description">
                    <p className="tiktok-description-title">FEATURED</p>
                    <p className="tiktok-description-subtitle">07-24-2023</p>
                    <hr className="line" />
                    <a href="https://carhartt-wip.jp/products/i031714-23s-1coxx?_pos=28&_sid=1e3ed2a62&_ss=r" target="_blank"><p className="tiktok-description-text">Carhartt Graphic-tee</p></a>
                    <a href="https://www.urbanoutfitters.com/en-ca/shop/peau-de-loup-x-skate-like-a-girl-uo-exclusive-carpenter-short?category=SEARCHRESULTS&color=001&searchparams=q%3Dblack%2520carpenter%2520shorts%2520men&type=REGULAR&quantity=1" target="_blank"><p className="tiktok-description-text">Black Jorts</p></a>
                    <a href="https://www.uniqlo.com/ca/en/products/E433037-000?colorCode=COL09&sizeCode=SMA002" target="_blank"><p className="tiktok-description-text">Uniqlo Long Sleeve</p></a>
                    <a href="https://www.uniqlo.com/ca/en/products/E461841-000?colorCode=COL30" target="_blank"><p className="tiktok-description-text">Uniqlo Drawstring Bag</p></a>
                    <hr className="line" />
                    
                </div>
            </div>
        </div>

        <div className="tiktok-preview">
            <div className="tiktok-video-container">
                <video className="tiktok-video" width="300px" height="300px" autoplay loop muted>
                    <source src={blacklightblue} />
                </video>
            </div>
            <div className="tiktok-description-container">
                <div className="tiktok-description">
                    <p className="tiktok-description-title">FEATURED</p>
                    <p className="tiktok-description-subtitle">07-07-2023</p>
                    <hr className="line" />
                    <a href="https://golfwang.com/collections/tees/products/stb-tee?variant=42248283488428/" target="_blank"><p className="tiktok-description-text">STB Graphic-tee</p></a>
                    <a href="https://renaissancequebec.ca/en/" target="_blank"><p className="tiktok-description-text">Thrifted Carhartt Carpenters</p></a>
                    <a href="https://www.uniqlo.com/ca/en/products/E433037-000?colorCode=COL09&sizeCode=SMA002" target="_blank"><p className="tiktok-description-text">Uniqlo Long Sleeve</p></a>
                    <a href="https://www.uniqlo.com/ca/en/products/E461841-000?colorCode=COL30" target="_blank"><p className="tiktok-description-text">Uniqlo Drawstring Bag</p></a>
                    <hr className="line" />
                    
                </div>
            </div>
        </div>

        <div className="tiktok-preview">
            <div className="tiktok-video-container">
                <video className="tiktok-video" width="300px" height="300px" autoplay loop muted>
                    <source src={grpteecargos} />
                </video>
            </div>
            <div className="tiktok-description-container">
                <div className="tiktok-description">
                    <p className="tiktok-description-title">FEATURED</p>
                    <p className="tiktok-description-subtitle">07-01-2023</p>
                    <hr className="line" />
                    <a href="https://supplier-tokyo.com/en/collections/vendors?q=TGNS" target="_blank"><p className="tiktok-description-text">TGNS Graphic-tee</p></a>
                    <a href="https://www.aelfriceden.com/products/aelfric-eden-webbing-multi-pocket-cargo-pants?variant=43333715460258" target="_blank"><p className="tiktok-description-text">Cargo Pants</p></a>
                    <a href="https://oldnavy.gapcanada.ca/browse/product.do?pid=209763#pdp-page-content" target="_blank"><p className="tiktok-description-text">Tank Top</p></a>
                    <a href="https://www.uniqlo.com/ca/en/products/E461841-000?colorCode=COL30" target="_blank"><p className="tiktok-description-text">Uniqlo Drawstring Bag</p></a>
                    <hr className="line" />
                    
                </div>
            </div>
        </div>

        <div className="tiktok-preview">
            <div className="tiktok-video-container">
                <video className="tiktok-video" width="300px" height="300px" autoplay loop muted>
                    <source src={grpteecarpenters} />
                </video>
            </div>
            <div className="tiktok-description-container">
                <div className="tiktok-description">
                    <p className="tiktok-description-title">FEATURED</p>
                    <p className="tiktok-description-subtitle">06-25-2023</p>
                    <hr className="line" />
                    <a href="https://carhartt-wip.jp/products/i031714-23s-1coxx?_pos=28&_sid=1e3ed2a62&_ss=r" target="_blank"><p className="tiktok-description-text">Carhartt Graphic-tee</p></a>
                    <a href="https://renaissancequebec.ca/en/" target="_blank"><p className="tiktok-description-text">Thrifted Carhartt Carpenters</p></a>
                    <a href="https://www.uniqlo.com/ca/en/products/E433037-000?colorCode=COL09&sizeCode=SMA002" target="_blank"><p className="tiktok-description-text">Uniqlo Long Sleeve</p></a>
                    <a href="https://www.uniqlo.com/ca/en/products/E461841-000?colorCode=COL30" target="_blank"><p className="tiktok-description-text">Uniqlo Drawstring Bag</p></a>
                    <hr className="line" />
                    
                </div>
            </div>
        </div>

        <div className="tiktok-preview">
            <div className="tiktok-video-container">
                <video className="tiktok-video" width="300px" height="300px" autoplay loop muted>
                    <source src={grpteelong} />
                </video>
            </div>
            <div className="tiktok-description-container">
                <div className="tiktok-description">
                    <p className="tiktok-description-title">FEATURED</p>
                    <p className="tiktok-description-subtitle">06-08-2023</p>
                    <hr className="line" />
                    <a href="https://renaissancequebec.ca/en/" target="_blank"><p className="tiktok-description-text">Thrifted Graphic-tee</p></a>
                    <a href="https://renaissancequebec.ca/en/" target="_blank"><p className="tiktok-description-text">Thrifted Cargo Pants</p></a>
                    <a href="https://www.uniqlo.com/ca/en/products/E433037-000?colorCode=COL09&sizeCode=SMA002" target="_blank"><p className="tiktok-description-text">Uniqlo Long Sleeve</p></a>
                    <a href="https://www.uniqlo.com/ca/en/products/E461841-000?colorCode=COL30" target="_blank"><p className="tiktok-description-text">Uniqlo Drawstring Bag</p></a>
                    <hr className="line" />
                    
                </div>
            </div>
        </div>

        <div className="tiktok-preview 05-05-23">
            <div className="tiktok-video-container">
                <video className="tiktok-video" width="300px" height="300px" autoplay loop muted>
                    <source src={fit1} />
                </video>
            </div>
            <div className="tiktok-description-container">
                <div className="tiktok-description">
                    <p className="tiktok-description-title">FEATURED</p>
                    <p className="tiktok-description-subtitle">05-05-2023</p>
                    <hr className="line" />
                    <a href="https://renaissancequebec.ca/en/" target="_blank"><p className="tiktok-description-text">Thrifted Graphic-tee</p></a>
                    <a href="https://renaissancequebec.ca/en/" target="_blank"><p className="tiktok-description-text">Thrifted Cargo Pants</p></a>
                    <a href="https://www.uniqlo.com/ca/en/products/E433037-000?colorCode=COL09&sizeCode=SMA002" target="_blank"><p className="tiktok-description-text">Uniqlo Long Sleeve</p></a>
                    <a href="https://www.uniqlo.com/ca/en/products/E461841-000?colorCode=COL30" target="_blank"><p className="tiktok-description-text">Uniqlo Drawstring Bag</p></a>
                    <hr className="line" />
                    
                </div>
            </div>
        </div>

    </section>
  );
}