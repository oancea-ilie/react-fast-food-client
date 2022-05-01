import { useState } from "react"
import UserInfo from "./UserInfo"
import UserMenu from "./UserMenu"

const UserContainer = ({favLocal}) => {

  let [right, setRight] = useState("details");


  return (

      <div className="userContainer">
        <UserMenu setRight={setRight}/>
        <UserInfo right ={right} favLocal={favLocal}/>
      </div>

  )
  
}

export default UserContainer