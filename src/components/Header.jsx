import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../assets/img/logo-2.png"
import Logo1 from "../assets/img/logo-1024.png"
import {FiMenu} from "react-icons/fi"
import {GrClose} from "react-icons/gr"
import { Context } from "./Context";
import UserDetails from "./UserDetails";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import {Animated} from "react-animated-css";


const Header = () => {

    const [user, setUser] = useContext(Context);

    let [toggle, setToggle] = useState(true);

    let history = useHistory();

    let handleActive=(e)=>{
        let obj = e.target;

        // de revenit aici
        if( obj.classList.contains("home-link")
            || obj.classList.contains("menu-link")
            || obj.classList.contains("about-link")
            || obj.classList.contains("contact-link")){
                let parent = obj.parentNode;
                let children = parent.children;

                for(let el of children){
                    if(el.classList.contains("active")){
                        el.classList.remove("active");
                    }
                }
                obj.classList.add("active");
                
                children[4].style.backgroundColor = "transparent";
                children[4].style.color = "white";
            }
        if(obj.classList.contains("header-login-btn")){
            obj.style.backgroundColor = "white";
            obj.style.color = "#a41a13";
            let parent = obj.parentNode;
            let children = parent.children;
            for(let el of children){
                el.classList.remove("active");
            }
        }
    }

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

    let handleLogout =()=>{
        setUser(undefined);
        Cookies.remove('authentificatedUser');
        history.push("/");
    }
    
    useEffect(()=>{
        corectie();
    },[user]);

    window.addEventListener("resize",corectie);

    return (
        <>
            {
                user
                ?     
                <section className="header-login">
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
                                <Link to={"/"} className="header-login-btn" onClick={handleLogout}>Logout</Link>
                                <UserDetails/>
                            </nav>
                            </>
                        }
                    </div>
            
                    {
                        toggle &&             
                            <div className="nav-toggle ">
                                <Link to={"/"} className="active">Home</Link>
                                <Link to={"/menu"}>Menu</Link>
                                <Link to={"/about-us"}>About Us</Link>
                                <Link to={"contact"}>Contact</Link>
                                <Link to={"/"} className="header-login-btn toggle-login-btn" onClick={handleLogout}>Logout</Link>
                            </div>
                    }
                </section>
                :
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
                            <nav onClick={handleActive}>
                                <Link to={"/"} className="home-link active">Home</Link>
                                <Link to={"/menu"} className="menu-link">Menu</Link>
                                <Link to={"/about-us"} className="about-link">About Us</Link>
                                <Link to={"/contact"} className = "contact-link">Contact</Link>
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
                        toggle &&
                        <Animated animationIn="bounceInDown" animationOut="bounceInUp" isVisible={true}>            
                            <div className="nav-toggle">
                                <Link to={"/"} className="active">Home</Link>
                                <Link to={"/menu"}>Menu</Link>
                                <Link to={"/about-us"}>About Us</Link>
                                <Link to={"contact"}>Contact</Link>
                                <Link to={"/login"} className="header-login-btn toggle-login-btn">Login</Link>
                            </div>
                        </Animated>
                    }
                </header>

            }
        </>
    )
}

export default Header