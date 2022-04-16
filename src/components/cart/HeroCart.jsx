import React from "react";

const HeroCart = () => {
    return(
        <div className="cart-hero">
            <h1>Cart</h1>

            <div className="link-cards">
                <a href="index.html" className="active">Home</a>
                <p>/</p>
                <a href="#">Cart</a>
            </div>
        </div>
    )
}

export default HeroCart