import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import DatePicker from '~/components/common/DatePicker'

function HistoryFilter() {
    return (
        <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}
        >
            <Box
                sx={{
                    display: 'flex', gap: 2,
                    flexDirection: {
                        xs: 'column',
                        sm: 'unset',
                        md: 'unset',
                        lg: 'unset'
                    },
                    // alignContent: {
                    //     xs: 'center',
                    //     sm: 'unset'
                    // },
                    flex: 1

                }}
            >
                <Button variant="outlined">
                    Total
                </Button>
                <Button variant="outlined" color='success'>
                    Cash inflow
                </Button>
                <Button variant="outlined" color='error'>
                    Cash outflow
                </Button>
            </Box>
            <Box
                sx={{
                    display: {
                        xs: 'flex',
                        lg: 'unset'
                    },
                    justifyContent: {
                        xs: 'center',
                        lg: 'unset'
                    },
                    flex: {
                        xs: 1,
                        lg: 'unset'
                    },
                    minWidth: {
                        xs: '300px',
                        sm: '550px',
                        lg: 'unset'
                    }
                }}
            >
                <DatePicker />
            </Box>
        </Box>
    )
}

export default HistoryFilter