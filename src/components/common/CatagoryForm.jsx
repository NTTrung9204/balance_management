import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import FormControl from '@mui/material/FormControl';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import Box from '@mui/material/Box';

import * as React from 'react';
function CatagoryForm({ ChildrenComponent, action, fetchData }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ChildrenComponent onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        console.log(formJson)
                        if (action == "create"){
                            fetchData(formJson)
                        }
                        handleClose();
                    },
                }}
            >
                <DialogTitle >Add New Catagory</DialogTitle>
                <DialogContent sx={{ display: 'flex', gap: 3, flexDirection: 'column' }}>
                    <Box
                        sx={{ minWidth: "300px" }}>
                        <FormControl fullWidth variant="standard">
                            <InputLabel htmlFor="standard-adornment-catagory">Catagory Name</InputLabel>
                            <Input
                                id="standard-adornment-catagory"
                                placeholder="Enter catagory name!"
                                name="catalogName"
                            />
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Create</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CatagoryForm;