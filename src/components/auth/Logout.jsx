import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "@mui/material";

const Logout = () => {
    const { logout } = useContext(AuthContext);

    return (
        <Button onClick={logout} variant="contained" color="secondary">
            Logout
        </Button>
    );
};

export default Logout;
