import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import BalanceToggle from '~/components/BalanceInfor/BalanceToggle';


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
                flexWrap: 'wrap',
                gap: 2,
            }}>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexDirection: 'column',
                    minWidth: '300px',
                    flex: 1
                }}>
                <Typography sx={{ color: theme.palette.primary.main }} variant="subtitle2">My balance</Typography>
                <BalanceToggle balance={4000000} />
            </Box>
            <Box sx={{ display: 'flex', flex: 1, minWidth: '300px', justifyContent: 'center' }}>
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