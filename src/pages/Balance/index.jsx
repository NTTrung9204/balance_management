import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import BalanceHeader from "./BalanceItem/BalanceHeader";
import BalanceContent from "./BalanceItem/BalanceContent";
import { Link } from "react-router-dom";

function BalancePage() {
    console.log("This is balance page")
    return (
        <Box>
            <BalanceHeader />
            <BalanceContent />
        </Box>
    );
};

export default BalancePage;
