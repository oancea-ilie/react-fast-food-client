import { useEffect, useRef, useState } from "react";

const UserMenu = ({setRight}) => {

  let parent = useRef();

  let handleActive =(e)=>{
    let obj = e.target;
    let p = parent.current.children;

    for(let e of p){
      if(e.classList.contains('userActive')){
        e.classList.remove("userActive");
      }
    }

    if(obj.classList.contains("link-menu")){
      obj.classList.add("userActive");
      setRight(obj.id);
    }
  }

  return (

    <div className="userMenu" ref={parent} onClick={(e)=>{handleActive(e)}}>
        <a href="#" className="link-menu userActive" id="details">My Details</a>
        <a href="#" className="link-menu" id="orders">My Orders</a>
        <a href="#" className="link-menu" id="favorite">My Favorite</a>
        <a href="#" className="link-menu" id="account">Account Settings</a>
    </div>

  )
  
}

export default UserMenu