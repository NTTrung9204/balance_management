import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import CopyComponent from '~/components/common/CopyComponent'

function HistoryDetailInfor({ title, content, infor, enableCopy }) {


    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 1, flex: 1, color: "#ccc", alignItems: "center", minWidth: "200px"}}>
                <Tooltip title={infor} arrow>
                    <HelpIcon fontSize="small" />
                </Tooltip>
                <Typography >
                    {title}:
                </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, flex: 3, alignItems: "center" }}>
                <Typography>
                    {content}
                </Typography>
                {
                    enableCopy ?
                        <CopyComponent textToCopy={content} />
                        : null
                }
            </Box>
        </Box>
    )
}

export default HistoryDetailInfor