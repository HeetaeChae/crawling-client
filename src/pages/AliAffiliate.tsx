import React from 'react';
import { Box } from '@mui/material';
import ContentTitle from 'components/common/ContentTitle';
import KeywordForm from 'components/common/KeywordForm';
import PromptForm from 'components/common/PromptForm';
import useSharedData from 'hooks/useSharedData';
import ProductInfo from 'components/ProductInfo';

export interface SharedDatas {
  productInfos: null | any[];
  aiScript: null | string;
}

function AliAffiliate() {
  const { datas, handleUpdateData } = useSharedData<SharedDatas>({
    initialDatas: {
      productInfos: null,
      aiScript: null,
    },
  });

  console.log(datas);

  return (
    <Box>
      <ContentTitle
        title="알리 어필리에이트 컨텐츠 생성하기"
        subTitle="AI를 사용해 알리 어필리에이트 제휴마케팅 컨텐츠를 생성하세요."
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <KeywordForm name="productInfos" onUpdateData={handleUpdateData} />
        <ProductInfo />
        <PromptForm name="aiScript" onUpdateData={handleUpdateData} />
      </Box>
    </Box>
  );
}

export default AliAffiliate;
