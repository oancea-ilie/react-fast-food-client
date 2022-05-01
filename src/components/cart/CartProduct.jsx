import React, { useEffect, useState } from 'react'
import arrayBufferToBase64 from "../../utils";
import {GrClose} from "react-icons/gr"

const CartProduct = ({fk, product, populateLocal, populateProducts, handleProductCopy, setProductsCopy, productsCopy}) => {

    let [totalPerProduct, setTotalPerProduct] = useState(product.price);

    let [count, setCount] = useState(1);

    let handleCloseBtn = ()=>{
        let rez = localStorage.getItem("Products");

        if(rez){
            rez = JSON.parse(rez);

            if(fk){
                let filtrat = rez.filter(e=> e.id != fk.id);

                localStorage.setItem("Products", JSON.stringify(filtrat));

                populateProducts();

                populateLocal();

                setProductsCopy(prev=>{
                    let arr = [...prev];

                    arr = arr.filter(e => e.id != fk.id);
                    
                    return arr;
                })
            }else{
                let filtrat = rez.filter(e=> e.id != product.id);

                localStorage.setItem("Products", JSON.stringify(filtrat));

                populateProducts();

                populateLocal();

                setProductsCopy(prev=>{
                    let arr = [...prev];

                    arr = arr.filter(e => e.id != product.id);
                    
                    return arr;
                })
            }
        }
    }

    let handlePlus=()=>{
        setCount((prev)=>{
            return prev+1;
        })
    }
    
    let handleMinus=()=>{
        if(count>1){
            setCount((prev)=>{
                return prev-1;
            })
        }

    }

    let handleTotalPerProduct = ()=>{
        if(fk){
            setTotalPerProduct(parseInt(fk.price) * count);
        }else{
            setTotalPerProduct(parseInt(product.price) * count);
        }
    }

    useEffect(()=>{
        handleTotalPerProduct();
    },[count])

    useEffect(()=>{
        if(fk){
            handleProductCopy(fk.id, totalPerProduct);
        }else{
            handleProductCopy(product.id, totalPerProduct);
        }
    },[totalPerProduct]);
    

  return<>

    { 
        fk
        ?
        <tr>
            <td>
                {
                    fk.image.data&&
                    <img src={"data:image/png;base64," + arrayBufferToBase64(fk.image.data)} alt=""/>
                }
            </td>
            <td>{fk.name}</td>
            <td>${fk.price}</td>
            <td>
                <input type="text" placeholder={count} disabled/>
                <div className="plus-minus">
                    <div className="plus" onClick={handlePlus}>+</div> 
                    <div className="minus" onClick={handleMinus}>-</div>
                </div>
            </td>
            <td>${totalPerProduct}</td>
            <td><GrClose className="cart-close-btn" onClick={()=>handleCloseBtn()}/></td>
        </tr>
        :
        <tr>
            <td>
                <img src={"data:image/png;base64," + arrayBufferToBase64(product.image.data)} alt=""/>
            </td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>
                <input type="text" placeholder={count} disabled/>
                <div className="plus-minus">
                    <div className="plus" onClick={handlePlus}>+</div> 
                    <div className="minus" onClick={handleMinus}>-</div>
                </div>
            </td>
            <td>${totalPerProduct}</td>
            <td><GrClose className="cart-close-btn" onClick={()=>handleCloseBtn()}/></td>
        </tr>
    }
  </>
}

export default CartProduct