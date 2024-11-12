import React from 'react';
import { Box, TextField, useTheme } from '@mui/material';
import ContentTitle from './ui/ContentTitle';
import { Psychology } from '@mui/icons-material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';
import ContentLoader from './ContentLoader';
import { createTextByMarketingCategory } from 'utils/createTextByCategory';
import { AiScriptRes } from 'types/aiScript';
import { MarketingCategory } from 'types/marketingCategory';

interface AiScriptProps {
  marketingCategory: MarketingCategory;
  aiScriptData: AiScriptRes | undefined;
  aiScriptIsLoading: boolean;
}

function AiScript({
  marketingCategory,
  aiScriptData,
  aiScriptIsLoading,
}: AiScriptProps) {
  const theme = useTheme();
  const { isMobile } = useDeviceWidthStore();
  const scriptSize = isMobile ? 200 : 230;

  const textByCategory = createTextByMarketingCategory(marketingCategory);

  if (!aiScriptData && !aiScriptIsLoading) {
    return null;
  }

  if (aiScriptIsLoading) {
    return (
      <ContentLoader
        title={`AI가 ${textByCategory} 상품 제휴마케팅에서 사용될 스크립트를 작성하고 있습니다...`}
        type="script"
        skeletonSize={scriptSize}
      />
    );
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
          value={aiScriptData?.script}
        />
      </Box>
    </Box>
  );
}

export default AiScript;
