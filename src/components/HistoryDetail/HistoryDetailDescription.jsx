import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';

function HistoryDetailDescription() {
    const content = "abc\nxyz\nppp\ndddd\nkkkk"
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <Box sx={{ display: "flex", gap: 1, flex: 1, color: "#ccc", alignItems: "center" }}>
                <Tooltip title="ID transaction" arrow>
                    <HelpIcon fontSize="small" />
                </Tooltip>
                <Typography >
                    Description:
                </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, flex: 3, alignItems: "center" }}>
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