import React from 'react'
import BalanceCreateNew from '../BalanceInfor/BalanceCreateNew'
import BorderColorIcon from '@mui/icons-material/BorderColor';

function EditTransaction() {
    return (
        <BalanceCreateNew ChildrenComponent={({onClick}) => {
            return (
                <BorderColorIcon onClick={onClick} sx={{
                    position: "absolute", right: "25px", top: "25px", '&:hover': {
                        color: 'primary.main',
                        transform: 'scale(1.1)',
                        transition: 'transform 0.2s ease, color 0.2s ease',
                    },
                    cursor: "pointer",
                    fontSize: "15px"
                }} />
            )
        }} />
    )
}

export default EditTransaction