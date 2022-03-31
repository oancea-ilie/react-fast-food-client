import React from "react";
import { Link } from "react-router-dom";

const ContactHero = () => {
    return (
        <section className="contact-hero">
        <h1>Contact</h1>

            <div className="link-cards">
                <Link to={"/"} className="active">Home</Link>
                <p>/</p>
                <a href="#">Contact</a>
            </div>
        </section>
    )
}
export default ContactHero