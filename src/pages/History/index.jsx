import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import HistoryFilter from './HistoryItem/HistoryFilter'

function HistoryPage() {
    return (
        <Box
            sx={{padding: '25px'}}
        >
            <HistoryFilter/>
        </Box>
    );
};

HistoryPage.propTypes = {
    pathname: PropTypes.string.isRequired,
};

export default HistoryPage;
