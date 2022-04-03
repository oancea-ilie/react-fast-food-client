import React from 'react'
import { Link } from 'react-router-dom'
import {RiUserSettingsLine} from "react-icons/ri"
import {BsBag} from "react-icons/bs"

const UserDetails = () => {
  return (
    <div className="user-deatils">
        <Link to={"/cart"}><BsBag className="cart-btn"/></Link>
        <div className="text">
            <h3>Shopping Cart</h3>
            <p>0 items <span>- $0.00</span></p>
        </div>
        <Link to={"/"}><RiUserSettingsLine className="user-btn"/></Link>
    </div>
  )
}

export default UserDetails