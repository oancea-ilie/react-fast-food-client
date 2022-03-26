import React from "react";
import Aboutseparator from "./AboutSeparator";
import CardsSection from "./CardsSection";
import HeroAboutUs from "./HeroAboutUs";
import OurChef from "./OurChef";
import ServiceAbout from "./ServiceAbout";
import TextImg from "./TextImg";

export default ()=>{

    return (

        <main className="main-about-us">
            <HeroAboutUs/>
            <TextImg/>
            <CardsSection/>
            <Aboutseparator/>
            <OurChef/>
            <ServiceAbout/>
        </main>
    )
}