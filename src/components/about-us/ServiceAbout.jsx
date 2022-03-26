import React from "react";
import service1 from "../../assets/img/service-icon-1.png"
import service2 from "../../assets/img/service-icon-2.png"
import service3 from "../../assets/img/service-icon-3.png"
import service4 from "../../assets/img/service-icon-4.png"

export default ()=>{

    return (
        
        <section className="service-about">
            <div className="container-about">
                <div className="card">
                    <img src={service1} alt=""/>
                    <h1>Free shipping on  first order</h1>
                    <p>Sign up for updates and get free shipping</p>
                </div>
                <div className="card">
                    <img src={service2} alt=""/>
                    <h1>Best Taste  Guaranttee</h1>
                    <p>We use best ingredients to cook the taste food.</p>
                </div>
                <div className="card">
                    <img src={service3} alt=""/>
                    <h1>Variety of Dishes</h1>
                    <p>We give variety of dishes, deserts, and drinks</p>
                </div>
                <div className="card">
                    <img src={service4} alt=""/>
                    <h1>25 Minites Delivery</h1>
                    <p>We deliver your food at your dooe that you order</p>
                </div>
            </div>

        </section>
    )
}