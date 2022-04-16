import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Context";
import ContainerCart from "./ContainerCart";
import HeroCart from "./HeroCart";

const MainCart = () => {

    let [user, setUser] = useContext(Context);

    let history = useHistory();

    return(
        <>
        {
            user
            ?
            <main className="main-cart">
                <HeroCart/>
                <ContainerCart/>
            </main>
            : 
            history.push("/")
        }
        </>
    )
}

export default MainCart