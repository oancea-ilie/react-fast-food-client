import React, {useEffect, useState } from "react";
import Api from "../../api";
import arrayBufferToBase64 from "../../utils";

const MenuProducts = () => {
    
    let [products, setProducts] = useState([]);
    
    let [limit, setLimit] = useState(5);

    let api = new Api();

    let populateProducts = async()=>{
        let rez = await api.getAllProducts();

        if(typeof rez != 'string'){
            setProducts(rez);
        }else{
            console.log(rez);
        }
    }

    let handleLimitProducts=(e)=>{
        e.preventDefault();
        if(products.length > 5){
            setLimit(prev =>{
                return prev + 5;
            });
        }
    }
        
    let handleOrderBtn = (product)=>{

        let arr = [];

        let arrLocal = localStorage.getItem('Products');

        if(arrLocal){
            arrLocal = JSON.parse(arrLocal);

            arrLocal.forEach(e=>{
                arr.push(e);
            })
        }

        arr.push(product);

        localStorage.setItem("Products", JSON.stringify(arr));

    }
    
    let handleFilter = async(e)=>{
        e.preventDefault();
        let obj = e.target;

        if(obj.id){
            // setare active pe element
            let parent = obj.parentNode;
            let links = parent.childNodes;
            links.forEach(e=>{
                if(e.classList.contains("active")){
                    e.classList.remove("active");
                }
            })
            obj.classList.add("active");
            
            if(obj.id !== "All"){
                let rez = await api.getAllOrderDetailsFiltred(obj.id);
                setProducts(rez);
            }
            if(obj.id === "All"){
                populateProducts();
            }

        }
    }

    useEffect(()=>{
        populateProducts();
    },[limit]);

    return (
        <section className="menu-products">

            <div className="header">
                <div className="title">
                    <h1>Our Products</h1>
                    <div className="line"></div>
                </div>
                
                <div className="lists" onClick={handleFilter}>
                    <a href="#" id="All" className="active">All</a>
                    <a href="#" id="Pizza">Pizza</a>
                    <a href="#" id="Burgers">Burgers</a>
                    <a href="#" id="Fries">Fries</a>
                    <a href="#" id="Combo">Combo</a>
                    <a href="#" id="Drinks">Drinks</a>
                </div>
            </div>

            <div className="body">
                {
                    products && 
                    products.slice(0, limit).map(e=>{
                        if(e.fk_category_id){
                            return (
                                <div key={e.id} className="card">
                                   <div className="product-card-img">
                                   <img src={"data:image/png;base64," + arrayBufferToBase64(e.fk_product_id_product_category.image.data)} alt=""/>
                                   </div>
                                   <h1>{e.fk_product_id_product_category.name}</h1>
                                   <p>{e.fk_product_id_product_category.description}</p>
                                   <h2>${e.fk_product_id_product_category.price}</h2>
                                   <a href="#" onClick={(event)=>{handleOrderBtn(e)}}>ORDER NOW</a>
                               </div>
                           )
                        }else{
                            return <div key={e.id} className="card">
                            <div className="product-card-img">
                                <img src={"data:image/png;base64," + arrayBufferToBase64(e.image.data) } alt=""/>
                            </div>
                            <h1>{e.name}</h1>
                            <p>{e.description}</p>
                            <h2>${e.price}</h2>
                            <a href="#" onClick={(event)=>{event.preventDefault(); handleOrderBtn(e)}}>ORDER NOW</a>
                        </div>
                        }
                    })
                }
            </div>

            {
                limit < products.length 
                && <a href="#" className="view-more" onClick={handleLimitProducts}>VIEW MORE</a>
            }
        </section>
    )
}

export default MenuProducts