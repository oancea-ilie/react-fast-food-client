import React from "react";
import { Link } from "react-router-dom";

const HeroCart = () => {
    return(
        <div className="cart-hero">
            <h1>Cart</h1>

            <div className="link-cards">
                <Link to={"/"} className="active">Home</Link>
                <p>/</p>
                <a href="#">Cart</a>
            </div>
        </div>
    )
}

export default HeroCart