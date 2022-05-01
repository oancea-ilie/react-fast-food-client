import UserHero from "./UserHero"
import UserContainer from "./UserContainer"
import { Context } from "../Context";
import { useContext } from "react";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const UserIndex = ({favLocal}) => {

  const [user, setUser] = useContext(Context);

  const history = useHistory();

  return(
    <>
      {
        user?
        <div className="userDetailsMain">
          <UserHero/>
          <UserContainer favLocal={favLocal}/> 
        </div>
        : history.push("/")
      }
    </>
  )
}

export default UserIndex