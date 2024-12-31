import React, { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';

const paginationModel = { page: 0, pageSize: 10 };

function CatagoryListItem({isNew}) {
    const columns = [
        { field: '_id', headerName: 'ID', width: 70 },
        { field: 'catalogName', headerName: 'Expenditure Category', width: 220 },
        {
            field: 'income', headerName: 'Income', width: 200, renderCell: (params) => {
                const amount = 100000;
                return (
                    <Chip sx={{ fontWeight: "bold", minWidth: "100px" }} label={"+" + amount} variant="outlined" color={"success"} />
                )
            }
        },
        {
            field: 'expense', headerName: 'Expense', width: 200, renderCell: (params) => {
                const amount = 30000;
                return (
                    <Chip sx={{ fontWeight: "bold", minWidth: "100px" }} label={"-" + amount} variant="outlined" color={"error"} />
                )
            }
        },
        {
            field: 'total', headerName: 'Total', width: 200, renderCell: (params) => {
                const amount = 70000;
                return (
                    <Chip sx={{ fontWeight: "bold", minWidth: "100px" }} label={"+" + amount} variant="outlined" color={"success"} />
                )
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            width: 150,
            renderCell: (params) => {
                return (
                    <Button
                        to={`/history/${params.id}`}
                        variant="outlined"
                    >
                        Detail
                    </Button>
                );
            },
        },
    ];

    const [rows, setRows] = useState([])

    useEffect(() => {
        fetch('http://localhost:8017/v1/catalog')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setRows(data)
            })
            .catch(error => {
                throw new Error(error);
            });
    }, [isNew]);

    const theme = useTheme();
    return (
        <Box sx={{ padding: "20px", backgroundColor: theme.palette.background.paper, marginTop: "20px" }}>
            <h2 style={{ margin: 0 }}>Catagory</h2>
            <Paper sx={{ height: 500, width: '100%', marginTop: "15px" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                    getRowId={(row) => row._id.slice(-4)}
                />
            </Paper>
        </Box>
    )
}

export default CatagoryListItem