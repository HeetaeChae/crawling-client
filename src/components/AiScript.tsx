import React from 'react';
import { Box, Paper, TextField } from '@mui/material';
import ContentTitle from './ui/ContentTitle';
import { LoopOutlined, Psychology } from '@mui/icons-material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

interface AiScriptProps {
  aiScript: string;
}

function AiScript({ aiScript }: AiScriptProps) {
  const { deviceWidth } = useDeviceWidthStore();
  const isMobile = deviceWidth <= 600;

  const paperBorderRadius = isMobile
    ? {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }
    : {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 15,
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
        <LoopOutlined
          sx={{
            animation: 'spin 2s linear infinite',
            '@keyframes spin': {
              '0%': {
                transform: 'rotate(360deg)',
              },
              '100%': {
                transform: 'rotate(0deg)',
              },
            },
          }}
        />
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            py: 2,
            px: 3,
            ...paperBorderRadius,
          }}
        >
          {aiScript}
        </Paper>
      </Box>
    </Box>
  );
}

export default AiScript;
