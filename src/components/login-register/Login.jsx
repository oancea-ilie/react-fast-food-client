import React from "react";


export default ()=>{

    return (
        <section className="login">
            <div className="container">
                <h1>Login</h1>

                <div className="form">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <a href="#" className="login-btn">Login</a>
                    <a href="#" className="register-btn">Register</a>
                </div>
            </div>
        </section>
    )
}