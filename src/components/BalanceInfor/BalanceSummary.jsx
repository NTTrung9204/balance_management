import Box from '@mui/material/Box';


import BalanceSummaryItem from './BalanceSummaryItem'

function BalanceSummary() {
    

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, flexWrap: "wrap" }}>
            <BalanceSummaryItem title="Total" from="12/12/2024" to="16/12/2024" quantity={125000} percent={25} />
            <BalanceSummaryItem title="Outcome" from="12/12/2024" to="16/12/2024" quantity={125000} percent={-15} />
            <BalanceSummaryItem title="Income" from="12/12/2024" to="16/12/2024" quantity={125000} percent={40} />
        </Box>
    );
}

export default BalanceSummary;