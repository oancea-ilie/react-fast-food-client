import React from "react";
import card1 from "../../assets/img/about-card-1.jpg"
import card2 from "../../assets/img/about-card-2.jpg"
import card3 from "../../assets/img/about-card-3.jpg"

const CardsSection = () => {
    return (
        
        <section className="cards-sections">
            <div className="container">
                <div className="card">
                    <img src={card1} alt=""/>
                    <a href="#">Take Care of Quality</a>
                    <p>Apitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</p>
                </div>
                <div className="card">
                    <img src={card2} alt=""/>
                    <a href="#">Taste Driven Food</a>
                    <p>Apitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</p>
                </div>
                <div className="card">
                    <img src={card3} alt=""/>
                    <a href="#">On Time Delivery</a>
                    <p>Apitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</p>
                </div>
            </div>
        </section>
    )
}

export default CardsSection