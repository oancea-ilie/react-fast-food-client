import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {BsBag} from "react-icons/bs"
import {Context} from "./Context"

const HeaderRight = ({local}) => {

  let [user, setUser] = useContext(Context);

  const randomColor = ["#FDF5DF","#5EBEC4", "#F92C85", "#ABF62D","#D6A3FB","#FECD45","#2568FB","#A0AECD"];

  const [color, setColor] = useState();

  const handleRandomColor = (min,max) =>{
    return Math.random() * (max- min)+min;
  }


  useEffect(()=>{
    let index = handleRandomColor(0, randomColor.length);
    index = parseInt(index);
    setColor(randomColor[index]);

  },[])

  return (
    <div className="user-deatils">
        <Link to={"/cart"}><BsBag className="cart-btn"/></Link>
        <div className="text">
            <h3>Shopping Cart</h3>
            <p>{local ? local.length : 0 } items</p>
        </div>
        <Link to={"/user"} className="userImageLink">
          <div className="userImage" style={{backgroundColor : `${color}`}}>
            <img src="#" alt=""/>
            {
              user.username?
              <p>{user.username[0].toUpperCase()}</p>
              : <p>{user.name[0].toUpperCase()}</p>
            }
          </div>
        </Link>
    </div>
  )
}

export default HeaderRight