import React from 'react'
import Box from '@mui/material/Box'
import CatagoryCreateNew from './CatagoryItem/CatagoryCreateNew'
import CatagoryListItem from './CatagoryItem/CatagoryListItem'
import { useState } from 'react'

function CatagoryPage() {
    const [isNew, setIsNew] = useState()

    const fetchData = (data) => {
        fetch('http://localhost:8017/v1/catalog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setIsNew(true)
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    return (
        <Box
            sx={{ padding: '25px' }}
        >
            <CatagoryCreateNew fetchData={fetchData} />
            <CatagoryListItem isNew={isNew} />
        </Box>
    )
}

export default CatagoryPage