import React from "react";
import { Link } from "react-router-dom";

const HeroMenu = () => {
   return (
        <section className="menu-hero">
            <h1>Menu </h1>
            
            <div className="link-cards">
                <Link to={"/"} className="active">Home</Link>
                <p>/</p>
                <a href="#">Menu</a>
            </div>
        </section>
    )
}
export default HeroMenu