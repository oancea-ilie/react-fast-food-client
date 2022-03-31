import React from "react";
import { Link } from "react-router-dom";

const HeroAboutUs = () => {
 return (
        <section className="about-hero">
            <h1>About Us</h1>
            
            <div className="link-cards">
                <Link to={"/"} className="active">Home</Link>
                <p>/</p>
                <a href="#">About Us</a>
            </div>
        </section>
    )
}

export default HeroAboutUs