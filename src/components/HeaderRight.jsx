import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {RiUserSettingsLine} from "react-icons/ri"
import {BsBag} from "react-icons/bs"

const HeaderRight = ({local}) => {

  return (
    <div className="user-deatils">
        <Link to={"/cart"}><BsBag className="cart-btn"/></Link>
        <div className="text">
            <h3>Shopping Cart</h3>
            <p>{local ? local.length : 0 } items</p>
        </div>
        <Link to={"/user"}><RiUserSettingsLine className="user-btn"/></Link>
    </div>
  )
}

export default HeaderRight