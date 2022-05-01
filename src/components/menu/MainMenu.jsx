import React from "react";
import ContainerMenu from "./ContainerMenu";
import HeroMenu from "./HeroMenu";
import MenuProducts from "./MenuProducts";

const MainMenu = ({populateLocal,favLocal,setFavLocal}) => {


    return (
        <main className="main-menu">
            <HeroMenu/>
            <MenuProducts populateLocal={populateLocal} favLocal={favLocal} setFavLocal={setFavLocal}/>
            <ContainerMenu/>
        </main>
    )
}

export default MainMenu