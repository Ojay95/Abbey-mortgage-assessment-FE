import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ bgcolor: "background.paper", p: 2, mt: "auto" }}>
            <Typography variant="body2" color="text.secondary" align="center">
                © {new Date().getFullYear()} Social App. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
