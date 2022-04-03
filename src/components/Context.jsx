import React, { createContext, useState } from "react";

export const Context = createContext();

const UserProvider=({children})=>{

    //{email: "test", password: "1123"}
    const [user, setUser] = useState(undefined);

    return(
        <Context.Provider value={[user,setUser]}>{children}</Context.Provider>
    )
    
}

export default UserProvider;