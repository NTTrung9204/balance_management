import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box'

function HistoryDetailInfor() {
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
                <Typography>
                    0xcf946395f4341f4c03d17acd366956576419ea68fd97617d057b2b1a69d3d358
                </Typography>
                <Tooltip title="Copy" arrow>
                    <ContentCopyIcon fontSize="small" />
                </Tooltip>
            </Box>
        </Box>
    )
}

export default HistoryDetailInfor