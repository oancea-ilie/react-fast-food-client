import React, { useEffect, useState } from 'react'
import arrayBufferToBase64 from "../../utils";
import {GrClose} from "react-icons/gr"

const CartProduct = ({product, populateLocal, populateProducts, handleProductCopy, setProductsCopy, productsCopy}) => {

    let [totalPerProduct, setTotalPerProduct] = useState(product.price);

    let [count, setCount] = useState(1);
    
    let handleCloseBtn = ()=>{
        let rez = localStorage.getItem("Products");

        if(rez){
            rez = JSON.parse(rez);

            let filtrat = rez.filter(e=> e.id != product.id);

            localStorage.setItem("Products", JSON.stringify(filtrat));

            // pentru update din ConainterCart ca sa stie ce sa afiseze si ce nu ca si produse in cos
            populateProducts();
            // pentru update din Home ca sa vedem ce este ordered si ce nu.
            populateLocal();

            setProductsCopy(prev=>{
                let arr = [...prev];

                arr = arr.filter(e => e.id != product.id);
                
                return arr;
            })
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
        setTotalPerProduct(parseInt(product.price) * count);
    }

    useEffect(()=>{
        handleTotalPerProduct();
    },[count])

    useEffect(()=>{
        handleProductCopy(product.id, totalPerProduct);
    },[totalPerProduct, productsCopy]);

  return (
    <tr>
        <td><img src={"data:image/png;base64," + arrayBufferToBase64(product.image.data)} alt=""/></td>
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
  )
}

export default CartProduct