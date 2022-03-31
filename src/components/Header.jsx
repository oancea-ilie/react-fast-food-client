import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../assets/img/logo-2.png"
import Logo1 from "../assets/img/logo-1024.png"
import {FiMenu} from "react-icons/fi"
import {GrClose} from "react-icons/gr"
import { bounceInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

export default ()=>{

    let [toggle, setToggle] = useState(false);

    let corectie = ()=>{
        let img = document.querySelector(".logo");

        if(window.innerWidth<1024){
            img.src = Logo2;
        }
        if(window.innerWidth>=1024){
            img.src = Logo1;
        }
        if(window.innerWidth>=768){
            setToggle(false);
        }
    }

    const styles = {
        bounceInDown: {
          animation: 'x 2s',
          animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
        }
    }

    useEffect(()=>{
        corectie();
    },[])

    window.addEventListener("resize",corectie);

    return (
        <header>
            <div className="container">
                <Link to={"/"} className="brand">
                    <img src={Logo2} className="logo" alt="logo"/>
                </Link>
                {
                    toggle
                    ?
                        <GrClose className="fas fa-bars" onClick={()=>{setToggle(false)}}/>
                    : 
                    <>
                    <FiMenu className="fas fa-bars" onClick={()=>{setToggle(true)}}/> 
                    <nav>
                        <Link to={"/"} className="active">Home</Link>
                        <Link to={"/menu"}>Menu</Link>
                        <Link to={"/about-us"}>About Us</Link>
                        <Link to={"/contact"}>Contact</Link>
                        <Link to={"/login"} className="header-login-btn">Login</Link>
                        <div className="order-now">
                            <h1>Order now</h1>
                            <a href="#">1800 456 7890</a>
                        </div>
                    </nav>
                    </>
                }
            </div>
            
            {
                toggle?             
                <div className="nav-toggle" style={styles.bounceInDown}>
                    <Link to={"/"} className="active">Home</Link>
                    <Link to={"/menu"}>Menu</Link>
                    <Link to={"/about-us"}>About Us</Link>
                    <Link to={"contact"}>Contact</Link>
                    <Link to={"/login"} className="header-login-btn toggle-login-btn">Login</Link>
                </div>: ""
            }
        </header>
    )
}