import {MdEdit} from "react-icons/md"
import {SiLinuxcontainers} from "react-icons/si"
import {MdOutlineFavoriteBorder} from "react-icons/md"
import { useContext, useEffect, useState } from "react"
import { Context } from "../Context"
import Api from "../../api"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const UserDetails = ({favLocal}) => {

    const [user, setUser] = useContext(Context);

    const api = new Api();

    const [userName, setUserName] = useState();

    const [userAddress, setUserAddress]= useState();
    
    const[userEmail, setUserEmail] = useState();

    const [userPhone, setUserPhone]= useState();

    const [userCreatedIn, setUserCreatedIn] = useState();

    const [userOrders, setUserOrders] = useState();

    const [letter, setLetter] = useState();

    const getUserData = async ()=>{
        
        let rez = await api.getCustomerByID(user.id);

        if(rez){
            setUserName(rez.name);
            setUserAddress(rez.billing_address);
            setUserPhone(rez.phone);
            setUserEmail(rez.email);
            setLetter(rez.name[0].toUpperCase());

            let y = rez.createdIn.slice(0,4);
            let m = rez.createdIn.slice(5,7);
            let d = rez.createdIn.slice(8,10);
            
            setUserCreatedIn(`${d}.${m}.${y}`);
        }

    }
    useEffect(()=>{
        getUserData();
    },[])
    
  return (
    <div className="detailsInfo">

        <div className="card">
            <div className="avatarNoImage">
                <p className="avatarName">{letter}</p>
                <MdEdit className="editBtn" size={35}></MdEdit>
            </div>
            <div className="avatarImageContainer">
                <img src="#" className="avatar" alt=""/>
                <p className="avatarName">{letter}</p>
                <i className="fas fa-edit editBtn"></i>
            </div>
            <div className="text">
                <h3>Name: <span>{userName}</span></h3>
                <h3>Email: <span>{userEmail}</span></h3>
                <h3>Address: <span>{userAddress}</span></h3>
                <h3>Phone: <span>{userPhone}</span></h3>
            </div>
        </div>

        <div className="activity">
            <div className="box">
                <SiLinuxcontainers></SiLinuxcontainers>
                <p> <span>0</span> orders</p>
            </div>
            <div className="box">
                <MdOutlineFavoriteBorder  className="favoriteIcon"></MdOutlineFavoriteBorder>
                <p> <span>{favLocal.length == 0 ? 0 : favLocal.length}</span> favorite products</p>
            </div>
        </div>

        <div className="thanks">
            <div className="thanksContainer">
                <p>Your are our client sice <span>{userCreatedIn}</span> !</p>
                <p>We thank you for that!</p>
            </div>
        </div>

        <Link to={'/cart'} className="userFavoriteBtn">View Cart</Link>

    </div>
  )
  
}

export default UserDetails