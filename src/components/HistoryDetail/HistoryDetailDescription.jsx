import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';

function HistoryDetailDescription() {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: 1, flex: 1, color: "#ccc", alignItems: "center" }}>
                <Tooltip title="ID transaction" arrow>
                    <HelpIcon fontSize="small" />
                </Tooltip>
                <Typography >
                    ID Transactions:
                </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, flex: 3, alignItems: "center" }}>
            <Chip sx={{ fontWeight: "bold", minWidth: "100px" }} label="32423423\n453453" variant="outlined"/>
            </Box>
        </Box>
    )
}

export default HistoryDetailDescription