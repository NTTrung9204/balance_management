import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';

function HistoryDetailStatus({amount}) {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: 1, flex: 1, color: "#ccc", alignItems: "center" }}>
                <Tooltip title="ID transaction" arrow>
                    <HelpIcon fontSize="small" />
                </Tooltip>
                <Typography >
                    Flow Type:
                </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, flex: 3, alignItems: "center" }}>
            <Chip sx={{ fontWeight: "bold", minWidth: "100px" }} label={(amount > 0 ? "+" : "") + amount} variant="outlined" color={amount > 0 ? "success" : "error"} />
            </Box>
        </Box>
    )
}

export default HistoryDetailStatus