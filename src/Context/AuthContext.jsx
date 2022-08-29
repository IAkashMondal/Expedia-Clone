import React,{ createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

 export const Authcontext= createContext()
 export const AuthcontextProviderComponent =({children})=>{
    const navigate = useNavigate();
    const [Auth,setAuth]=useState(false);
    const handelLogin= ()=>{
        setAuth(true)
        alert("Log In sucessfully!")
        navigate("/")
    
    }
    const handellogOut=()=>{
        setAuth(false)
        navigate("/")
    }
    return(
        <>
        <Authcontext.Provider value={{Auth,handelLogin,handellogOut}}>
            {children}
        </Authcontext.Provider>
        </>
    )
 }