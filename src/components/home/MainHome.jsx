import React from "react";
import Delivery from "./Delivery";
import HeroMain from "./HeroMain";
import HomeSeparator from "./HomeSeparator";
import HotCombo from "./HotCombo";
import Oferte from "./Oferte";
import Produse from "./Produse";
import Services from "./Services";

const MainHome = () => {
    return (
        <main className="main-home">
            <HeroMain/>
            <Oferte/>
            <Produse/>
            <HomeSeparator/>
            <HotCombo/>
            <Delivery/>
            <Services/>
        </main>
    )
}

export default MainHome