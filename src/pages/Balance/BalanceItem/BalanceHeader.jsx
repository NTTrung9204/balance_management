import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';


function BalanceHeader() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: "15px 20px",
                borderBottom: '1px solid ' + theme.palette.primary.main,
            }}>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexDirection: 'column',
                }}>
                <Typography sx={{color: theme.palette.primary.main}} variant="subtitle2">My balance</Typography>
                <Typography sx={{fontWeight: 'bold'}} variant="h5">4,000,000vnđ</Typography>
            </Box>
            <Box>
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
            </Box>
        </Box>
    );
}

export default BalanceHeader;