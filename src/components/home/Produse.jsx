import React from "react";
import Product1 from "../../assets/img/product-burger.jpg"
import Product2 from "../../assets/img/product-pizz.jpg"
import Product3 from "../../assets/img/product-cartofi.jpg"
import Product4 from "../../assets/img/product-coca-cola.jpg"
import Product5 from "../../assets/img/product-burger.jpg"


export default ()=>{


    return (
        <section className="products">

            <div className="header">
                <div className="title">
                    <h1>Our Products</h1>
                    <div className="line"></div>
                </div>
                
                <div className="lists">
                    <a href="#" className="active">All</a>
                    <a href="#">Pizza</a>
                    <a href="#">Burgers</a>
                    <a href="#">Wraps</a>
                    <a href="#">Fries</a>
                    <a href="#">Salad</a>
                    <a href="#">Drinks</a>
                </div>
            </div>

            <div className="body">
                <div className="card">
                    <img src={Product1} alt=""/>
                    <h1>Chicken Burger</h1>
                    <p>Our flavors & ingredients to build our local burgers</p>
                    <h2>$17.00</h2>
                    <a href="#">ORDER NOW</a>
                </div>
                <div className="card">
                    <img src={Product2} alt=""/>
                    <h1>Pizza</h1>
                    <p>Our flavors & ingredients to build our local burgers</p>
                    <h2>$17.00</h2>
                    <a href="#">ORDER NOW</a>
                </div>
                <div className="card">
                    <img src={Product3} alt=""/>
                    <h1>Fries</h1>
                    <p>Our flavors & ingredients to build our local burgers</p>
                    <h2>$17.00</h2>
                    <a href="#">ORDER NOW</a>
                </div>
                <div className="card">
                    <img src={Product4} alt=""/>
                    <h1>Coca Cola</h1>
                    <p>Our flavors & ingredients to build our local burgers</p>
                    <h2>$17.00</h2>
                    <a href="#">ORDER NOW</a>
                </div>
                <div className="card">
                    <img src={Product5} alt=""/>
                    <h1>Chicken Burger</h1>
                    <p>Our flavors & ingredients to build our local burgers</p>
                    <h2>$17.00</h2>
                    <a href="#">ORDER NOW</a>
                </div>
            </div>
        </section>
    )
}