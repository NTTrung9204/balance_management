import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';

function CopyComponent({textToCopy}) {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <Tooltip
            sx={{
            }}
            onClick={handleCopyClick} title={copied ? "Copied!" : "Copy"} arrow>
            <DoneIcon sx={{ display: copied ? "unset" : "none", fontSize: "15px" }} />
            <ContentCopyIcon sx={{
                display: copied ? "none" : "unset",
                '&:hover': {
                    color: 'primary.main',
                    transform: 'scale(1.1)',
                    transition: 'transform 0.2s ease, color 0.2s ease',
                },
                cursor: "pointer",
                fontSize: "15px"
            }} />
        </Tooltip>
    )
}

export default CopyComponent