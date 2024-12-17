import React from 'react';
import BalanceIcon from '~/assets/coins-solid.svg?react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

function AppBarTitle() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
            }}
        >
            <Box
                component={BalanceIcon}
                sx={{
                    width: '20px',
                    height: '20px',
                    fill: theme.palette.primary.main,
                }}
            />
            <Typography sx={{color: theme.palette.primary.main}} variant="h6">Balance Management</Typography>
        </Box>
    );
}

export default AppBarTitle;
