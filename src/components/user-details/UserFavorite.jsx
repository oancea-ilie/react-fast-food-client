
import arrayBufferToBase64 from "../../utils";
import ProductNotFound from "../../assets/img/product-not-found.png"

const UserFavorite = ({favLocal}) => {

  return (

    <>
      <div className="favoriteInfo">
        {
          favLocal.length > 0&& 
          favLocal.map(p=>{

            return<div key={p.id} className="favoriteCard">
                  <img loading="lazy" src={"data:image/png;base64," + arrayBufferToBase64(p.image.data) } alt=""/>
                  <h1>{p.name}</h1>
                  <p>Price: <span>${p.price}</span></p>
              </div>
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