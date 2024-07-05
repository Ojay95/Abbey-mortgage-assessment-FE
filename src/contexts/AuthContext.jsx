import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService, registerService, logoutService } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = async (email, password) => {
        try {
            const response = await loginService(email, password);
            setUser(response.user);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const registerUser = async (username, email, password) => {
        try {
            const response = await registerService(username, email, password);
            setUser(response.user);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        logoutService();
        setUser(null);
        navigate("/login");
    };

    return <AuthContext.Provider value={{ user, login, registerUser, logout }}>{children}</AuthContext.Provider>;
};
