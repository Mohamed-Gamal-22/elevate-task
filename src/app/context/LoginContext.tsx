"use client"
import React, { createContext, useState } from "react";


export const LoginContext = createContext<any>(null);

export default function ModalForm(props:any){

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)



    return <LoginContext.Provider value={{showLogin, setShowLogin,showRegister,setShowRegister}}>
        {props.children}
    </LoginContext.Provider>

}

