import React from "react";
import Cartofi from "../../assets/img/product-cartofi.jpg"
import Burger from "../../assets/img/product-burger.jpg";

export default ()=>{

    return (
        <div className="container">

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Preview</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={Cartofi}/></td>
                            <td>Burger</td>
                            <td>$25</td>
                            <td><input type="text" placeholder="1" disabled/><div className="plus-minus"><div className="plus">+</div> <div className="minus">-</div></div></td>
                            <td>$25</td>
                            <td>x</td>
                        </tr>
                        <tr>
                            <td><img src={Burger}/></td>
                            <td>Burger</td>
                            <td>$25</td>
                            <td><input type="text" placeholder="1" disabled/><div className="plus-minus"><div className="plus">+</div> <div className="minus">-</div></div></td>
                            <td>$25</td>
                            <td>x</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="total-container">
                <div className="total-card">
                    <h1>Cart Totals</h1>
                    <p>Sub total <span>$25</span></p>
                    <p>Shipping <span className="free">Free</span></p>
                    <p>Total <span>$25</span></p>
                    <a href="#">Place Order</a>
                </div>
            </div>
        </div>
    )
}