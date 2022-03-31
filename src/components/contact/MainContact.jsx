import React from "react";
import ContactContainer from "./ContactContainer";
import ContactHero from "./ContactHero";

const MainContact = () => {
    return (
        <main className="main-contact">
            <ContactHero/>
            <ContactContainer/>
        </main>
    )
}

export default MainContact