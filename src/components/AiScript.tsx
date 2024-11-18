import React from 'react';
import { Box, TextField, useTheme } from '@mui/material';
import ContentTitle from './ui/ContentTitle';
import { AccountCircle } from '@mui/icons-material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';
import { MarketingCategory } from 'types/marketingCategory';

interface AiScriptProps {
  aiScriptData: string | null;
}

function AiScript({ aiScriptData }: AiScriptProps) {
  const theme = useTheme();
  const { isMobile } = useDeviceWidthStore();

  if (!aiScriptData) {
    return null;
  }

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
      <ContentTitle title="AI에게 요청할 프롬프트 스크립트" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'start' : 'end',
          gap: isMobile ? 1 : 2,
        }}
      >
        <AccountCircle sx={{ color: 'gray' }} fontSize="large" />
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
          value={aiScriptData}
          disabled
        />
      </Box>
    </Box>
  );
}

export default AiScript;
