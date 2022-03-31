import React from "react";
import logo2 from "../assets/img/logo-2.png"

const Footer = () => {
    return (
        <footer>
        
        <div className="footer-wrapper">

            <div className="footer-header">
                <img src={logo2} alt=""/>
                <p>Just Burgers <br/> 256, baker Street, Suit Building <br/> New Youk, 5245</p>
            </div>
    
            <div className="footer-body">
    
                <div className="card1">
                    <div className="title">
                        <h1>Contact Info</h1>
                        <div className="line"></div>
                    </div>
    
                    <div className="body">
                        <h1>(1800) 574 9687</h1>
                        <p>wengdo@contact.co.in</p>
                        <p>contact@wengdo.com</p>
                    </div>
                </div>
    
                <div className="card2">
                    <div className="title">
                        <h1>Opening Hour</h1>
                        <div className="line"></div>
                    </div>
                    <div className="body">
                        <li>Tuesday- Saturday <span>8 AM - 5 PM</span></li>
                        <li>Sunday <span>12 AM - 8 PM</span></li>
                        <li>Monday <span>Off</span></li>
                    </div>
    
                </div>
            </div>
        </div>

        <div className="footer-footer">
            <p>© Copyright 2022 | <span>Oancea Ilie</span>. All right reserved.</p>
        </div>

    </footer>
    )
}

export default Footer