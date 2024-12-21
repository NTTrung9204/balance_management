import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    TimeScale,
    Tooltip,
    Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
import { useTheme, ThemeProvider } from "@mui/material/styles";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
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

import * as React from 'react';

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    TimeScale,
    Tooltip,
    Legend
);

const data = {
    labels: [
        "2024-12-01T12:00:00",
        "2024-12-02T14:30:00",
        "2024-12-03T16:45:00",
        "2024-12-04T10:15:00",
        "2024-12-05T09:00:00",
    ],
    datasets: [
        {
            label: "VND",
            data: [30, 50, 25, 90, 70],
            borderColor: "teal",
            tension: 0.4,
        },
    ],
};

const BalanceChart = () => {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: theme.palette.text.primary, // Sử dụng màu từ theme
                },
            },
            tooltip: {
                callbacks: {
                    title: (tooltipItems) => {
                        return tooltipItems[0].label; // Hiển thị ngày giờ chi tiết
                    },
                },
            },
        },
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day",
                    displayFormats: {
                        day: "yyyy-MM-dd",
                    },
                },
                ticks: {
                    color: theme.palette.text.primary, // Màu chữ trục X
                },
                title: {
                    display: true,
                    text: "Date",
                    color: theme.palette.text.primary, // Màu tiêu đề trục X
                },
            },
            y: {
                ticks: {
                    color: theme.palette.text.primary, // Màu chữ trục Y
                },
                title: {
                    display: true,
                    text: "VND",
                    color: theme.palette.text.primary, // Màu tiêu đề trục Y
                },
            },
        },
    };

    return (
        <Box sx={{
            padding: '20px', backgroundColor: theme.palette.background.paper, borderRadius: '10px',
            flex: 1, display: 'flex', flexDirection: 'column', gap: 2, marginTop: "20px", border: "1px solid rgb(44, 53, 71)"
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 style={{ margin: 0 }}>Cash flow</h2>
                <Button onClick={handleClickOpen} size="medium" variant="outlined" endIcon={<AddCircleOutlineIcon />}>Create New</Button>
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
                            handleClose();
                        },
                    }}
                >
                    <DialogTitle >Add New Transactions</DialogTitle>
                    <DialogContent sx={{display: 'flex', gap: 3, flexDirection: 'column'}}>
                        <Box sx={{marginTop: '30px', display: 'flex', justifyContent: 'space-evenly', gap: 1}}>
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
                                    defaultValue={1}
                                    name="Catalog"
                                >
                                    <MenuItem value={1}>Food & Dining</MenuItem>
                                    <MenuItem value={2}>Transportation</MenuItem>
                                    <MenuItem value={3}>Shopping</MenuItem>
                                    <MenuItem value={4}>Parking fees</MenuItem>
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
                                sx={{width: "100%"}}
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
            </Box>
            <Line data={data} options={options} />
        </Box>
    );
};

export default BalanceChart;