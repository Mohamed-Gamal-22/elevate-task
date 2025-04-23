"use client"
import React, { createContext, useState } from "react";


export const LoginContext = createContext<any>(null);

export default function LoginContextProvider(props:any){

    const [showLogin, setshowLogin] = useState(false)



    return <LoginContext.Provider value={{showLogin, setshowLogin}}>
        {props.children}
    </LoginContext.Provider>

}

