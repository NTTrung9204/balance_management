import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider } from "@mui/material/styles";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'expenditure_category', headerName: 'Expenditure Category', width: 220 },
    {
        field: 'flow_type', headerName: 'Flow Type', width: 200, renderCell: (params) => {
            const amount = params.value;
            return (
                <Chip sx={{ fontWeight: "bold", minWidth: "100px" }} label={(amount > 0 ? "+" : "") + amount} variant="outlined" color={amount > 0 ? "success" : "error"} />
            )
        }
    },
    {
        field: 'date',
        headerName: 'Date',
        width: 200,
    },
    {
        field: 'time',
        headerName: 'Time',
        width: 200,
    },
    {
        field: 'action',
        headerName: 'Action',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 150,
        renderCell: (ID) => {
            return (
                <Button variant='outlined'>View</Button>
            )
        },
    },
];

const rows = [
    {
        id: 1,
        expenditure_category: 'Food',
        flow_type: 50,  // Positive number indicates income
        date: '2024-12-01',
        time: '10:00 AM',
    },
    {
        id: 2,
        expenditure_category: 'Transport',
        flow_type: -30, // Negative number indicates expense
        date: '2024-12-02',
        time: '02:30 PM',
    },
    {
        id: 3,
        expenditure_category: 'Utilities',
        flow_type: -100,
        date: '2024-12-03',
        time: '09:15 AM',
    },
    {
        id: 4,
        expenditure_category: 'Salary',
        flow_type: 1000,
        date: '2024-12-05',
        time: '08:00 AM',
    },
    {
        id: 5,
        expenditure_category: 'Entertainment',
        flow_type: -150,
        date: '2024-12-06',
        time: '07:45 PM',
    },
    {
        id: 6,
        expenditure_category: 'Food',
        flow_type: 120,
        date: '2024-12-07',
        time: '12:30 PM',
    },
    {
        id: 7,
        expenditure_category: 'Transport',
        flow_type: -50,
        date: '2024-12-08',
        time: '10:20 AM',
    },
    {
        id: 8,
        expenditure_category: 'Rent',
        flow_type: -500,
        date: '2024-12-09',
        time: '06:00 PM',
    },
    {
        id: 9,
        expenditure_category: 'Salary',
        flow_type: 1500,
        date: '2024-12-10',
        time: '09:00 AM',
    },
    {
        id: 10,
        expenditure_category: 'Entertainment',
        flow_type: -200,
        date: '2024-12-12',
        time: '11:30 PM',
    },
];


const paginationModel = { page: 0, pageSize: 10 };

function HistoryBoard() {
    const theme = useTheme();
    return (
        <Box sx={{padding: "20px", backgroundColor: theme.palette.background.paper, marginTop: "20px"}}> 
            <h2 style={{ margin: 0 }}>History</h2>
            <Paper sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper>
        </Box>
    );
}

export default HistoryBoard;