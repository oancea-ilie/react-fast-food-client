import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../assets/img/logo-2.png"
import Logo1 from "../assets/img/logo-1024.png"
import {FiMenu} from "react-icons/fi"
import {GrClose} from "react-icons/gr"
import { Context } from "./Context";
import HeaderRight from "./HeaderRight";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import {Animated} from "react-animated-css";
import { NavLink } from "react-router-dom";
import {RiUser3Line} from "react-icons/ri"
import {BsBag} from "react-icons/bs"


const Header = ({local}) => {

    const [user, setUser] = useContext(Context);

    let [toggle, setToggle] = useState(true);

    let history = useHistory();

    const randomColor = ["#5EBEC4", "#F92C85", "#ABF62D","#D6A3FB","#FECD45","#2568FB","#A0AECD"];

    const [color, setColor] = useState();
  
    const handleRandomColor = (min,max) =>{
      return Math.random() * (max- min)+min;
    }
  
  
    useEffect(()=>{
      let index = handleRandomColor(0, randomColor.length);
      index = parseInt(index);
      setColor(randomColor[index]);
  
    },[])


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
                        <div className="iconsContainer">
                            <Link to={"/user"}><RiUser3Line size={32} className="header-icon"/></Link>
                            <Link to={"/cart"}><BsBag  size={30} className="header-icon"/></Link>
                            {
                                toggle
                                ?
                                    <GrClose className="fas fa-bars" onClick={()=>{setToggle(false)}}/>
                                : 
                                <>
                                    <FiMenu className="fas fa-bars" onClick={()=>{setToggle(true)}}/> 
                                <nav>
                                    <NavLink to={"/"} exact={true} activeClassName="active-link">Home</NavLink>
                                    <NavLink to={"/menu"} activeClassName="active-link">Menu</NavLink>
                                    <NavLink to={"/about-us"} activeClassName="active-link">About Us</NavLink>
                                    <NavLink to={"/contact"} activeClassName="active-link">Contact</NavLink>
                                    <NavLink to={"/"} className="header-login-btn" onClick={handleLogout}>Logout</NavLink>
                                    <HeaderRight local = {local}/>
                                </nav>
                                </>
                            }
                        </div>
                    </div>
            
                    {
                        toggle &&
                        <Animated animationIn="bounceInDown" animationOut="bounceInUp" isVisible={true}>             
                            <div className="nav-toggle ">
                                <NavLink to={"/"} exact={true} activeClassName="active-link">Home</NavLink>
                                <NavLink to={"/menu"} activeClassName="active-link">Menu</NavLink>
                                <NavLink to={"/about-us"} activeClassName="active-link">About Us</NavLink>
                                <NavLink to={"contact"} activeClassName="active-link">Contact</NavLink>
                                <NavLink to={"/"} activeClassName="active-btn" className="header-login-btn toggle-login-btn" onClick={handleLogout}>Logout</NavLink>
                            </div>
                        </Animated>
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
                                <nav>
                                    <NavLink to={"/"} exact={true} activeClassName="active-link">Home</NavLink>
                                    <NavLink to={"/menu"} activeClassName="active-link" className="menu-link">Menu</NavLink>
                                    <NavLink to={"/about-us"} activeClassName="active-link" className="about-link">About Us</NavLink>
                                    <NavLink to={"/contact"} activeClassName="active-link" className = "contact-link">Contact</NavLink>
                                    <NavLink to={"/login"} className="header-login-btn" activeClassName="active-btn">Login</NavLink>
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
                                <NavLink to={"/"} exact={true}  activeClassName="active-link">Home</NavLink>
                                <NavLink to={"/menu"}  activeClassName="active-link">Menu</NavLink>
                                <NavLink to={"/about-us"}  activeClassName="active-link">About Us</NavLink>
                                <NavLink to={"contact"}  activeClassName="active-link">Contact</NavLink>
                                <NavLink to={"/login"} activeClassName="active-btn" className="header-login-btn toggle-login-btn">Login</NavLink>
                            </div>
                        </Animated>
                    }
                </header>

            }
        </>
    )
}

export default Header