import arrayBufferToBase64 from "../../utils";
import ProductNotFound from "../../assets/img/product-not-found.png"

const UserFavorite = ({favLocal}) => {

  return (
    
    <>
      <div className="favoriteInfo">
        {
          favLocal.length > 0 && 
          favLocal.map(p=>{
            if(p.fk_product_id_product_category){
              return<div key={p.fk_product_id_product_category.id} className="favoriteCard">
                    <img loading="lazy" src={"data:image/png;base64," + arrayBufferToBase64(p.fk_product_id_product_category.image.data) } alt=""/>
                    <h1>{p.fk_product_id_product_category.name}</h1>
                    <p>Price: <span>${p.fk_product_id_product_category.price}</span></p>
                </div>
            }else{
              return<div key={p.id} className="favoriteCard">
                  <img loading="lazy" src={"data:image/png;base64," + arrayBufferToBase64(p.image.data) } alt=""/>
                  <h1>{p.name}</h1>
                  <p>Price: <span>${p.price}</span></p>
              </div>
            }
          })
        }
      </div>

      {
        favLocal.length==0 && 
          <div className="notFound">
          <img src={ProductNotFound} alt="" />
        </div>
      }
    </>

  )
  
}

export default UserFavorite