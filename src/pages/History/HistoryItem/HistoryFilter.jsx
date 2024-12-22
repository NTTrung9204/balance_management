import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import DatePicker from '~/components/common/DatePicker'
import { useState } from 'react';

function HistoryFilter() {
    const [type, setType] = useState('totalHistoryTransaction')

    const handleSwitchButton = (e) => {
        setType(e.target.id)
    }

    return (
        <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}
        >
            <Box
                sx={{
                    display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'unset', md: 'unset', lg: 'unset' },
                    flex: 1
                }}
            >
                <Button id='totalHistoryTransaction' onClick={handleSwitchButton} variant={type === 'totalHistoryTransaction' ? "contained" : "outlined"}>
                    Total
                </Button>
                <Button id='incomeHistoryTransaction' onClick={handleSwitchButton} variant={type === 'incomeHistoryTransaction' ? "contained" : "outlined"} color='success'>
                    Cash inflow
                </Button>
                <Button id='outcomeHistoryTransaction' onClick={handleSwitchButton} variant={type === 'outcomeHistoryTransaction' ? "contained" : "outlined"} color='error'>
                    Cash outflow
                </Button>
            </Box>
            <Box
                sx={{
                    display: { xs: 'flex', lg: 'unset' }, justifyContent: { xs: 'center', lg: 'unset' },
                    flex: { xs: 1, lg: 'unset' }, minWidth: { xs: '300px', sm: '550px', lg: 'unset' }
                }}
            >
                <DatePicker />
            </Box>
        </Box>
    )
}

export default HistoryFilter