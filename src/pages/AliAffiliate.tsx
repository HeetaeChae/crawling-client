import React, { useState } from 'react';
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
import UrlForm from 'components/UrlForm';
import CustomSegmentedButton from 'components/CustomSegmentedButton';
import { useSegmentedButton } from 'hooks/useSegmentedButton';

function AliAffiliate() {
  const { productInfoMutation } = useProductInfo();
  const {
    data: productInfoData,
    isPending: productInfoIsLoading,
    mutate: productInfoMutate,
  } = productInfoMutation;

  const marketingCategory = MARKETING_CATEGORIES.aliAffiliate;

  const { datas, handleUpdateData } = useSharedData<{
    completedPromptScript: null | string;
  }>({
    initialDatas: {
      completedPromptScript: null,
    },
  });

  const buttonItems = [
    { label: '키워드', value: 'keyword' },
    { label: 'URL', value: 'url' },
  ];

  const { selectedButton, handleSelectButton } = useSegmentedButton({
    initialValue: 'keyword',
  });

  return (
    <Box>
      <MarketingPageHeader marketingCategory={marketingCategory} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <CustomSegmentedButton
          label="추출 방법"
          buttonItems={buttonItems}
          selectedButton={selectedButton}
          onSelectButton={handleSelectButton}
        />
        {selectedButton === 'keyword' ? (
          <KeywordForm
            marketingCategory={marketingCategory}
            validForm
            productInfoMutate={productInfoMutate}
          />
        ) : (
          <UrlForm marketingCategory={marketingCategory} validForm />
        )}
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

export default AliAffiliate;
