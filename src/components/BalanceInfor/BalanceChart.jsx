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
    const theme = useTheme(); // Lấy theme từ MUI

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
        <Box sx={{ padding: '20px', backgroundColor: theme.palette.background.paper, borderRadius: '10px', 
        flex: 1, display: 'flex', flexDirection: 'column', gap: 2, marginTop: "20px", border: "1px solid rgb(44, 53, 71)" }}>
            <h2>Cash flow</h2>
            <Line data={data} options={options} />
        </Box>
    );
};

export default BalanceChart;