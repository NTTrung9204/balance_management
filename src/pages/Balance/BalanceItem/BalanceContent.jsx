import Box from '@mui/material/Box';
import BalanceSummary from '~/components/BalanceInfor/BalanceSummary';
import BalanceChart from '~/components/BalanceInfor/BalanceChart';


function BalanceContent() {
  return (
    <Box
        sx={{
            padding: '25px',
        }}
    >
        <BalanceSummary />
        <BalanceChart />
    </Box>
  );
}

export default BalanceContent;  