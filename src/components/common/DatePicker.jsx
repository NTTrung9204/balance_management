import React from 'react'
import dayjs from 'dayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

function DatePicker() {
    const theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                    <DemoItem component="DateRangePicker">
                        <DateRangePicker
                            defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </ThemeProvider>
    )
}

export default DatePicker