import React from "react";
import chef1 from "../../assets/img/about-chef-1.jpg"
import chef2 from "../../assets/img/about-chef-2.jpg"
import chef3 from "../../assets/img/about-chef-3.jpg"
import chef4 from "../../assets/img/about-chef-4.jpg"

const OurChef = () => {
    return (
    
        <section className="our-chef">

            <div className="title">
                <h1>Our Chef</h1>
                <p>Override the digital divide with additional clickthroughs from immersion along the information highway.</p>
            </div>

            <div className="wrapper-about">
                <div className="container-about">
                    <div className="card">
                        <img src={chef1} alt=""/>
                        <h2>John michale</h2>
                        <p>Burger Specilist</p>
                    </div>
                    <div className="card">
                        <img src={chef2} alt=""/>
                        <h2>John michale</h2>
                        <p>Burger Specilist</p>
                    </div>
                    <div className="card">
                        <img src={chef3} alt=""/>
                        <h2>John michale</h2>
                        <p>Burger Specilist</p>
                    </div>
                    <div className="card">
                        <img src={chef4} alt=""/>
                        <h2>John michale</h2>
                        <p>Burger Specilist</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurChef