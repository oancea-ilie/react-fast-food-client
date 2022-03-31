import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="login">
            <div className="container">
                <h1>Login</h1>

                <div className="form">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <a href="#" className="login-btn">Login</a>
                    <Link to={"/register"} className="register-btn">Register</Link>
                </div>
            </div>
        </section>
    )
}

export default Login