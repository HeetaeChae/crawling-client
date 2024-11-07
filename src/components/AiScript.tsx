import React from 'react';
import { Box, Paper, TextField, useTheme } from '@mui/material';
import ContentTitle from './ui/ContentTitle';
import { LoopOutlined, Psychology } from '@mui/icons-material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

interface AiScriptProps {
  aiScript: string;
}

function AiScript({ aiScript }: AiScriptProps) {
  const theme = useTheme();
  const { deviceWidth } = useDeviceWidthStore();
  const isMobile = deviceWidth <= 600;

  const scriptBorderRadius = isMobile
    ? {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }
    : {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 20,
      };

  return (
    <Box>
      <ContentTitle title="AI가 생성한 제휴마케팅 스크립트" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'start' : 'end',
          gap: isMobile ? 1 : 3,
        }}
      >
        <Psychology sx={{ color: 'gray' }} fontSize="large" />
        <TextField
          fullWidth
          InputProps={{
            style: {
              textAlign: 'justify',
              backgroundColor: theme.palette.background.paper,
              ...scriptBorderRadius,
            },
          }}
          multiline
          value={aiScript}
        />
      </Box>
    </Box>
  );
}

export default AiScript;
