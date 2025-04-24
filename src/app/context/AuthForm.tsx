"use client"

import { createContext, useState } from "react"


export const AuthFormContext = createContext({});

export default function AuthFormContextProvider(props : any){


    const [login, setShowLogin] = useState(false);
    const [register, setShowRegister] = useState(false);

    function getLogin(){
        setShowLogin(true);
        setShowRegister(false)
    }

    function getRegister(){
        setShowLogin(false);
        setShowRegister(true)
    }

    function closeAll(){
        setShowLogin(false)
        setShowRegister(false)
    }



    return <AuthFormContext.Provider value={{getLogin, getRegister, login, register, closeAll}}>
        {props.children}
    </AuthFormContext.Provider>
}