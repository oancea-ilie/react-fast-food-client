import React, { useEffect, useState } from "react";
import Cartofi from "../../assets/img/product-cartofi.jpg"
import {GrClose} from "react-icons/gr"
import Api from "../../api";
const ContainerCart = () => {
    

    let [products, setProducts] = useState('');

    let [quantity, setQuantity] = useState(1);

    let api = new Api();

    let populateProducts = async()=>{

        let rez = localStorage.getItem("Products");

        if(rez){
            rez = JSON.parse(rez);
            setProducts(rez);
        }

    }

    let handleCloseBtn = (el)=>{
        let rez = localStorage.getItem("Products");

        if(rez){
            rez = JSON.parse(rez);

            let filtrat = rez.filter(e=> e.id != el.id);

            localStorage.setItem("Products", JSON.stringify(filtrat));

            setProducts(prev=>{
                let total = [...prev];

                let filt = total.filter(e=>e.id != el.id);
                
                return filt;
            })
        }
    }

    useEffect(e=>{
        populateProducts();
    },[])


    return (
        <div className="container-cart">
            {
                products?
                <>
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
                            {
                                products.map(e=>{
                                    return (
                                        <tr key={e.id}>
                                            <td><img src={Cartofi} alt=""/></td>
                                            <td>{e.name}</td>
                                            <td>{e.price}</td>
                                            <td><input type="text" placeholder={quantity} disabled/><div className="plus-minus"><div className="plus">+</div> <div className="minus">-</div></div></td>
                                            <td>$25</td>
                                            <td><GrClose className="cart-close-btn" onClick={()=>handleCloseBtn(e)}/></td>
                                        </tr>
                                    )
                                })
                            }
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
                </>
                //SETARE EROARE
                :<p>EROARE</p>
            }
        </div>
    )
}

export default ContainerCart