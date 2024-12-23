import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import HistoryFilter from './HistoryItem/HistoryFilter'
import HistoryBoard from './HistoryItem/HistoryBoard'
import { Link } from "react-router-dom";

function HistoryPage({navigate}) {
    console.log("This is history page")
    return (
        <Box
            sx={{padding: '25px'}}
        >
            <HistoryFilter/>
            <HistoryBoard navigate = {navigate} />
        </Box>
    );
};

export default HistoryPage;
