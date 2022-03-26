import React from "react";


export default ()=>{

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
                    <a href="#" class="login-btn">Already have an account?</a>
                </div>
            </div>
        </section>
    )
}