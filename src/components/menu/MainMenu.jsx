import React from "react";
import ContainerMenu from "./ContainerMenu";
import HeroMenu from "./HeroMenu";
import MenuProducts from "./MenuProducts";


export default ()=>{


    return (
        <main className="main-menu">
            <HeroMenu/>
            <MenuProducts/>
            <ContainerMenu/>
        </main>
    )
}