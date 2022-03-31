import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section class="register">
            <div class="container">
                <h1>Register</h1>

                <div class="form">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                    <a href="#" class="register-btn">Register</a>
                    <Link to={"/login"} class="login-btn">Already have an account?</Link>
                </div>
            </div>
        </section>
    )
}
export default Register