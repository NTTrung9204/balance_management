import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import BalanceHeader from "./BalanceItem/BalanceHeader";
import BalanceContent from "./BalanceItem/BalanceContent";


function BalancePage() {
    return (
        <Box>
            <BalanceHeader />
            <BalanceContent />
        </Box>
    );
};

BalancePage.propTypes = {
    pathname: PropTypes.string.isRequired,
};

export default BalancePage;
