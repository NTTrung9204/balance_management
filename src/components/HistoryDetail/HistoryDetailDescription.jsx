import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';

function HistoryDetailDescription({content}) {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 1, flex: 1, color: "#ccc", alignItems: "center", minWidth: "200px" }}>
                <Tooltip title="Type of service you pay" arrow>
                    <HelpIcon fontSize="small" />
                </Tooltip>
                <Typography >
                    Description:
                </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, flex: 3, alignItems: "center", minWidth: "250px" }}>
                <TextField
                    sx={{ width: "100%"}}
                    variant="filled"
                    label="Transaction note"
                    style={{ pointerEvents: 'none'}}
                    color="success"
                    multiline
                    inputProps={{ readOnly: true }}
                    defaultValue={content}
                />
            </Box>
        </Box>
    )
}

export default HistoryDetailDescription