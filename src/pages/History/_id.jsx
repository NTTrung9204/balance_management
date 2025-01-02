import React from 'react'
import Box from '@mui/material/Box'
import HistoryDetailInfor from '~/components/HistoryDetail/HistoryDetailInfor'
import HistoryDetailStatus from '~/components/HistoryDetail/HistoryDetailStatus'
import HistoryDetailDescription from '~/components/HistoryDetail/HistoryDetailDescription'

import EditTransaction from '~/components/HistoryDetail/EditTransaction'

import { useTheme, ThemeProvider } from "@mui/material/styles";

function HistoryDetail({ id }) {
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
        <HistoryDetailInfor title={"ID Transaction"} content={id_transaction} enableCopy={true} infor={"This is a ID of transaction"} />
        <HistoryDetailStatus title={"Type Flow"} amount={100000} />
        <HistoryDetailInfor title={"Expenditure Category"} content={"Food"} enableCopy={false} infor={"Type of service you use"} /> {/* expenditure_category */}
        <HistoryDetailInfor title={"Date"} content={currentDate} enableCopy={false} infor={"The date you pay this service"} /> { /* Date */}
        <HistoryDetailInfor title={"Time"} content={currentTime} enableCopy={false} infor={"The time you pay this service"} /> { /* Time */}
        <HistoryDetailInfor title={"Timestamp"} content={currentTimeStamp} enableCopy={false} infor={"The timestamp you pay this service"} /> { /* Time Timestamp */}
        <HistoryDetailDescription content={content} />
        <EditTransaction />
        
      </Box>
    </Box>
  )
}

export default HistoryDetail