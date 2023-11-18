import { createContext, useContext, useState } from "react";
import { registerRequest } from '../api/auth';

const AuthContext = createContext()

const useAuth = ()=>{
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("UseAuth must be useb with in an AuthProvider")
    }

    return context
}


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState(null)

    const signup = async  (user) =>{
        try {
            const res =  await registerRequest(user)
            console.log(res);
            setUser(res)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.message);
            setErrors(error.message)
           
        }
    }


    return(
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export {
    AuthProvider,
    useAuth
}

