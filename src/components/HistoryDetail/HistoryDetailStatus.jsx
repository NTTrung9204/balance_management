import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';

function HistoryDetailStatus({amount, title}) {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 1, flex: 1, color: "#ccc", alignItems: "center", minWidth: "200px" }}>
                <Tooltip title={title} arrow>
                    <HelpIcon fontSize="small" />
                </Tooltip>
                <Typography >
                    {title}:
                </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, flex: 3, alignItems: "center" }}>
            <Chip sx={{ fontWeight: "bold", minWidth: "100px" }} label={(amount > 0 ? "+" : "") + amount} variant="outlined" color={amount > 0 ? "success" : "error"} />
            </Box>
        </Box>
    )
}

export default HistoryDetailStatus