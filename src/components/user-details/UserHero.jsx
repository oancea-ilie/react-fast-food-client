import React from 'react'
import { Link } from 'react-router-dom'


const UserHero = () => {

    return(
        <div className="cart-hero">
            <h1>User Details</h1>

            <div className="link-cards">
                <Link to={"/"} className="active">Home</Link>
                <p>/</p>
                <a href="#">User Details</a>
            </div>
        </div>
    )
}

export default UserHero