import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import BalanceToggle from '~/components/BalanceInfor/BalanceToggle';
import DatePicker from '~/components/common/DatePicker'

function BalanceHeader() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: "15px 20px",
                borderBottom: '1px solid  rgb(44, 53, 71)',
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
                <DatePicker />
            </Box>
        </Box>
    );
}

export default BalanceHeader;