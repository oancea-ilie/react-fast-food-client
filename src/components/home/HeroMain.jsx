import React from "react";
import bgImg from "../../assets/img/hero-img.png"

export default ()=>{

    return (
        <section className="hero">
            <div className="container">
                <img src={bgImg} alt=""/>

                <div className="text">
                    <h2>Hot Stuff</h2>
                    <h1>Maxican Burger ...</h1>
                    <p className="first">with bacon, tasty ham, pineapple and onion</p>
    
                    <p className="italian">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio tempora, consequatur ullam quibusdam nostrum ut incidunt quas accusamus ducimus?</p>
    
                    <a href="#">ORDER NOW</a>
                </div>
            </div>
        </section>
    )
}