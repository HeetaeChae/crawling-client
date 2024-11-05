import React from 'react';
import { Box } from '@mui/material';
import useSharedData from 'hooks/useSharedData';
import ProductInfo from 'components/ProductInfo';
import TitleTypography from 'components/ui/TitleTypography';
import KeywordForm from 'components/KeywordForm';
import PromptForm from 'components/PromptForm';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

export interface SharedDatas {
  productInfos: null | any[];
  aiScript: null | string;
}

function AliAffiliate() {
  const { deviceWidth } = useDeviceWidthStore();
  const isMobile = deviceWidth <= 600;
  const cardSize = isMobile ? 125 : 180;

  const { datas, handleUpdateData } = useSharedData<SharedDatas>({
    initialDatas: {
      productInfos: null,
      aiScript: null,
    },
  });

  console.log(datas);

  return (
    <Box>
      <TitleTypography
        title="알리 어필리에이트 컨텐츠 생성하기"
        subTitle="AI를 사용해 알리 어필리에이트 제휴마케팅 컨텐츠를 생성하세요."
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5.5 }}>
        <KeywordForm name="productInfos" onUpdateData={handleUpdateData} />
        <ProductInfo productInfos={datas.productInfos} cardSize={cardSize} />
        <PromptForm name="aiScript" onUpdateData={handleUpdateData} />
      </Box>
    </Box>
  );
}

export default AliAffiliate;
