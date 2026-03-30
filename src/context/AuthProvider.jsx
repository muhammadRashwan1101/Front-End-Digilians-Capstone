import  { useState } from "react";
import {AuthContext} from "./AuthContext";

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    
    console.log("AuthProvider rendered with token:", token);
    const login = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    }
    return (
        <AuthContext.Provider value={{token, setToken, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}