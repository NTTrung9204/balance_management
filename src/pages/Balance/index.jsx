import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import BalanceHeader from "./BalanceItem/BalanceHeader";


function BalancePage() {
    return (
        <Box>
            <BalanceHeader />
        </Box>
    );
};

BalancePage.propTypes = {
    pathname: PropTypes.string.isRequired,
};

export default BalancePage;
