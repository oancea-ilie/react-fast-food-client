import React, { useEffect, useState } from "react";
import Loading from "../../assets/loading.svg"
import CartProduct from "./CartProduct";

const ContainerCart = ({populateLocal}) => {

    let [products, setProducts] = useState([]);

    let [subTotal, setSubTotal] = useState(0);

    let [productsCopy, setProductsCopy]= useState([]);

    let populateProducts =()=>{

        let rez = localStorage.getItem("Products");

        if(rez){
            rez = JSON.parse(rez);
            setProducts(rez);
        }

    }

    let populateProductsCopy =()=>{
        let rez = localStorage.getItem("Products");

        if(rez){
            rez = JSON.parse(rez);
            setProductsCopy(rez);
        }

    }

    let handleProductCopy = (id, newPrice)=>{

        if(productsCopy){
            let arr = productsCopy;
            let obj;
            arr.forEach(e=>{
                if(e.id == id){
                    obj = e;
                }
            });

            if(obj){
                obj.price = newPrice;
                arr = arr.filter(el => el.id != id);
                arr.push(obj);

                setProductsCopy(arr);
            }

        }
    }

    let handlSubTotal=()=>{

        let aux = 0;
        if(productsCopy){
            productsCopy.forEach(e=>{
                aux += parseInt(e.price);
            })
        }

        setSubTotal(aux);
    }

    useEffect(e=>{
        populateProducts();
        populateProductsCopy();
    },[])


    useEffect(e=>{
        handlSubTotal();
    },[productsCopy])



    return (
        <div className="container-cart">
            {
                products.length>0?
                <div className="wrapper">
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
                                            <CartProduct key={e.id} handleProductCopy={handleProductCopy} product={e} populateLocal={populateLocal} populateProducts = {populateProducts} setProductsCopy={setProductsCopy}
                                            productsCopy = {productsCopy}/>
                                        )
                                    })
                                }
                            </tbody>
                        </table>           
                    </div>

                    <div className="total-container">
                        <div className="total-card">
                            <h1>Cart Totals</h1>
                            <p>Sub total <span>${subTotal}</span></p>
                            <p>Shipping <span className="free">Free</span></p>
                            <p>Total <span>${subTotal}</span></p>
                            <a href="#">Place Order</a>
                        </div>
                    </div>
                </div>
                :<img className="loading" src={Loading} alt="" />
            }
        </div>
    )
}

export default ContainerCart