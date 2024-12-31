import React from 'react'
import Box from '@mui/material/Box'
import CatagoryForm from '~/components/common/CatagoryForm'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CatagoryCreateNew({fetchData}) {
    return (
        <Box
            sx={{ display: "flex", justifyContent: "flex-end" }}
        >
            <CatagoryForm fetchData={fetchData} action={"create"} ChildrenComponent={
                ({ onClick }) =>
                (<Button onClick={onClick} size="medium" variant="outlined" endIcon={<AddCircleOutlineIcon />}>
                    Create New
                </Button>)
            } />
        </Box>
    )
}

export default CatagoryCreateNew