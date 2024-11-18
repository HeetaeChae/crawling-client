import React from 'react';
import { Box } from '@mui/material';
import ProductInfo from 'components/ProductInfo';
import KeywordForm from 'components/KeywordForm';
import AiScript from 'components/AiScript';
import FlexibleSubmitButton from 'components/ui/FlexibleSubmitButton';
import Prompt from 'components/Prompt';
import useProductInfo from 'hooks/useProductInfo';
import { MARKETING_CATEGORIES } from 'constants/marketingCategories';
import MarketingPageHeader from 'components/MarketingPageHeader';
import useSharedData from 'hooks/useSharedData';

function CoupangPartners() {
  const { productInfoMutation } = useProductInfo();
  const {
    data: productInfoData,
    isPending: productInfoIsLoading,
    mutate: productInfoMutate,
  } = productInfoMutation;

  const marketingCategory = MARKETING_CATEGORIES.coupangPartners;

  const { datas, handleUpdateData } = useSharedData({
    initialDatas: {
      completedPromptScript: null,
    },
  });

  return (
    <Box>
      <MarketingPageHeader marketingCategory={marketingCategory} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <KeywordForm
          marketingCategory={marketingCategory}
          validForm
          productInfoMutate={productInfoMutate}
        />
        <ProductInfo
          marketingCategory={marketingCategory}
          productInfoData={productInfoData}
          productInfoIsLoading={productInfoIsLoading}
        />
        <Prompt
          marketingCategory={marketingCategory}
          validButton
          productInfoData={productInfoData}
          productInfoIsLoading={productInfoIsLoading}
          onUpdateData={handleUpdateData}
        />
        <AiScript aiScriptData={datas.completedPromptScript} />
        <FlexibleSubmitButton
          label="상품 키워드 다시 입력하기"
          valid
          type="outlined"
        />
      </Box>
    </Box>
  );
}

export default CoupangPartners;
