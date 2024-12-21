import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material/styles";
import Chip from '@mui/material/Chip';

function BalanceSummaryItem({quantity, from, to, percent, title}) {
    const theme = useTheme();
    const dashboardContentColor = theme.palette.background.paper;
    return (
        <Box sx={{ padding: '20px', backgroundColor: dashboardContentColor, borderRadius: '10px', flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="subtitle2">
                {title}
            </Typography>
            <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <Typography sx={{ fontWeight: "bold" }} variant="h5">
                    {quantity}
                </Typography>

                <Chip sx={{fontWeight: "bold"}} label={(percent > 0 ? "+" : "" ) + percent + "%"} variant="outlined" color={percent > 0 ? "success" : "error"} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography>
                    {from}
                </Typography>
                <Typography sx={{ padding: "0 10px" }}>
                    -
                </Typography>
                <Typography>
                    {to}
                </Typography>
            </Box>
        </Box>
    )
}

export default BalanceSummaryItem