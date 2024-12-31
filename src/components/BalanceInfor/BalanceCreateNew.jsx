import Button from '@mui/material/Button';


import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

import * as React from 'react';
function BalanceCreateNew({ ChildrenComponent }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [Option, setOption] = React.useState('');

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    const [catagory, setCatagories] = useState([{_id: "trung"}])

    useEffect(() => {
        fetch('http://localhost:8017/v1/catalog')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setCatagories(data)
            })
            .catch(error => {
                throw new Error(error);
            });
    }, []);

    const [isNew, setIsNew] = useState()

    const createNewTransaction = (data) => {
        fetch('http://localhost:8017/v1/transaction', {
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
                        console.log(formJson);
                        createNewTransaction(formJson)
                        handleClose();
                    },
                }}
            >
                <DialogTitle >Add New Transactions</DialogTitle>
                <DialogContent sx={{ display: 'flex', gap: 3, flexDirection: 'column' }}>
                    <Box sx={{ marginTop: '30px', display: 'flex', justifyContent: 'space-evenly', gap: 1 }}>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel id="select-type-label">Type</InputLabel>
                            <Select
                                labelId="select-type-label"
                                id="select-type"
                                label="Type"
                                onChange={handleChange}
                                defaultValue={1}
                                name="Type"
                            >
                                <MenuItem value={1}>Income</MenuItem>
                                <MenuItem value={-1}>Expense</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel id="catalog-label">Catalog</InputLabel>
                            <Select
                                labelId="catalog-label"
                                id="catalog"
                                label="Catalog"
                                onChange={handleChange}
                                defaultValue={catagory[0]._id}
                                name="catalogId"
                            >
                                {
                                    catagory.map((catalogItem)=>{
                                        return (
                                            <MenuItem key={catalogItem._id} value={catalogItem._id}>{catalogItem.catalogName}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'TimePicker']}>
                                <DatePicker label="Date" defaultValue={dayjs('2022-04-17')} name="dateCreate" />
                                <TimePicker
                                    label="Time"
                                    defaultValue={dayjs('2022-04-17T15:30')}
                                    name="timeCreate"
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                    <Box>
                        <FormControl fullWidth variant="standard">
                            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                placeholder="Enter amount!"
                                name="amount"
                            />
                        </FormControl>
                    </Box>
                    <Box>
                        <TextField
                            sx={{ width: "100%" }}
                            id="Note-static"
                            label="Note"
                            multiline
                            rows={4}
                            placeholder="Note something here!"
                            name="note"
                        />
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

export default BalanceCreateNew;