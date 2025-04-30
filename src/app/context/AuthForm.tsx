"use client"

import { createContext, useState, ReactNode } from "react"
import { AuthFormContextType } from "@/types/authFormContext";

type Props = {
    children: ReactNode;
  };


export const AuthFormContext = createContext<AuthFormContextType | null>(null);

export default function AuthFormContextProvider({children} : Props){


    const [login, setShowLogin] = useState(false);
    const [register, setShowRegister] = useState(false);
    const [forget, setForget] = useState(false);
    const [password, setPassword] = useState(false);
    const [newPassword, setNewPassword] = useState(false);

    function getLogin(){
        setShowLogin(true);
        setShowRegister(false)
        setForget(false)
        setPassword(false)
    }

    function getRegister(){
        setShowLogin(false);
        setShowRegister(true)
        setForget(false)
        setPassword(false)
    }

    function closeAll(){
        setShowLogin(false)
        setShowRegister(false)
        setForget(false)
        setPassword(false)
        setNewPassword(false)
    }

    function getForgetPassword(){
        setForget(true)
        setShowLogin(false)
        setShowRegister(false)
        setPassword(false)
    }

    function getSetPassword(){
        setPassword(true)
        setForget(false)
        setShowLogin(false)
        setShowRegister(false)
    }

    function setNewPass(){
        closeAll()
        setNewPassword(true)
    }



    return <AuthFormContext.Provider value={{getLogin, getRegister, login, register, closeAll, forget, getForgetPassword, password, getSetPassword, newPassword, setNewPass}}>
        {children}
    </AuthFormContext.Provider>
}