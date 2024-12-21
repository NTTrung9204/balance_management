import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function BalanceToggle({ balance }) {
    const [isShow, setIsShow] = useState(false);

    const handleToggle = () => {
        setIsShow(!isShow);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                minHeight: '32px',
                position: 'relative'
            }}
        >
            <Typography
                sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
                variant="h5"
            >
                {isShow ?
                    <>
                        {balance} <AttachMoneyIcon />
                    </>
                    :
                    <>
                        {balance.toString().split('').map((item, index) => (
                            <FiberManualRecordIcon key={index} sx={{ fontSize: '1rem' }} />
                        ))}
                    </>}

            </Typography>
            <Box onClick={handleToggle} sx={{ cursor: 'pointer', left: '180px', position: 'absolute', display: 'flex', alignItems: 'center' }}>
                {isShow ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Box>
        </Box>
    );
}

export default BalanceToggle;
