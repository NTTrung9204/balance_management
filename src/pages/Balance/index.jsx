import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function BalancePage() {
    return (
        <Box
            sx={{
                py: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Typography>Dashboard content for Balance</Typography>
        </Box>
    );
};

BalancePage.propTypes = {
    pathname: PropTypes.string.isRequired,
};

export default BalancePage;
