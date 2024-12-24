import React from 'react'
import Box from '@mui/material/Box'
import HistoryDetailInfor from '~/components/HistoryDetail/HistoryDetailInfor'
import HistoryDetailStatus from '~/components/HistoryDetail/HistoryDetailStatus'
import HistoryDetailDescription from '~/components/HistoryDetail/HistoryDetailDescription'

import { useTheme, ThemeProvider } from "@mui/material/styles";

function HistoryDetail({ id }) {
  const theme = useTheme()
  return (
    <Box sx={{ padding: "25px", height: "100%" }}>
      <Box sx={{padding: "25px", borderRadius: "25px", backgroundColor: theme.palette.background.paper,
        display: "flex", flexDirection: "column", gap: 3
      }}>
        <HistoryDetailInfor />
        <HistoryDetailStatus amount={100000} />
        <HistoryDetailInfor /> {/* expenditure_category */}
        <HistoryDetailInfor /> { /* Date */}
        <HistoryDetailInfor /> { /* Time */}
        <HistoryDetailInfor /> { /* Time Timestamp */}
        <HistoryDetailDescription />
      </Box>
    </Box>
  )
}

export default HistoryDetail