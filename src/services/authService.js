import api from "./api";

export const loginService = async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
};

export const registerService = async (username, email, password) => {
    const response = await api.post("/auth/register", { username, email, password });
    return response.data;
};

export const logoutService = () => {
    // Perform any necessary cleanup here
};
