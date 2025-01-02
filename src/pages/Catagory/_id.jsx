import React from 'react'
import Box from '@mui/material/Box'
import HistoryDetailStatus from '~/components/HistoryDetail/HistoryDetailStatus'

import { useTheme, ThemeProvider } from "@mui/material/styles";
import HistoryDetailInfor from '~/components/HistoryDetail/HistoryDetailInfor'

function CatagoryDetail({ id }) {
  const id_transaction = "239429342394204228394240283042";
  const theDate = new Date();
  const currentDate = `${theDate.getUTCDate()}/${theDate.getMonth() + 1}/${theDate.getFullYear()}`
  const currentTime = `${theDate.getHours()}:${theDate.getMinutes()}:${theDate.getSeconds()}`
  const currentTimeStamp = `${theDate.getTime()}`
  const content = "abc\nxyz\nppp\ndddd\nkkkk"

  const theme = useTheme()
  return (
    <Box sx={{ padding: "25px", height: "100%" }}>
      <Box sx={{
        padding: "25px", borderRadius: "25px", backgroundColor: theme.palette.background.paper,
        display: "flex", flexDirection: "column", gap: 3, position: "relative"
      }}>
        <HistoryDetailInfor title={"ID Catagory"} content={id_transaction} infor={"Id of catagory"} enableCopy={true} />
        <HistoryDetailInfor title={"Expenditure Catagory"} content={"Repair car"} infor={"Name of catagory"} enableCopy={false} />
        <HistoryDetailInfor title={"Time Created"} content={currentTimeStamp} infor={"Time Created"} enableCopy={false} />
        <HistoryDetailStatus title={"Expense"} amount={-100000} />
        <HistoryDetailStatus title={"Income"} amount={30000} />
        <HistoryDetailStatus title={"Total"} amount={-70000} />
      </Box>
    </Box>
  )
}

export default CatagoryDetail