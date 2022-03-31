import React from "react";
import ContainerCart from "./ContainerCart";
import HeroCart from "./HeroCart";

const MainCart = () => {
    return(
        <main className="main-cart">
            <HeroCart/>
            <ContainerCart/>
        </main>
    )
}

export default MainCart