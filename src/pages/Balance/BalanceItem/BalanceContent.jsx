import Box from '@mui/material/Box';
import BalanceSummary from '~/components/BalanceInfor/BalanceSummary';


function BalanceContent() {
  return (
    <Box
        sx={{
            padding: '15px',
        }}
    >
        <BalanceSummary />
    </Box>
  );
}

export default BalanceContent;  