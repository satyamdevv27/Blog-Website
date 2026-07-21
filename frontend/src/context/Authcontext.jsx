/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
   const [user, setUser] = useState(null);

   useEffect(()=>{
    const storeduser = JSON.parse(localStorage.getItem("user"))
    if(storeduser){
        setUser(storeduser)
    }
   }
   ,[])

    return(
        
        <AuthContext.Provider value={{user , setUser}}>
            {children}
        </AuthContext.Provider>
    )
}