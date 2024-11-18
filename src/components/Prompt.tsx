import React from 'react';
import { MarketingCategory } from 'types/marketingCategory';
import { ProductInfoRes } from 'types/productInfo';
import { createProductInfoPrompt } from 'utils/createProductInfoPrompt';
import ContentLoader from './ContentLoader';
import PromptForm from './PromptForm';

interface PromptProps {
  marketingCategory: MarketingCategory;
  validButton: boolean;
  productInfoData: ProductInfoRes | undefined;
  productInfoIsLoading: boolean;
  onUpdateData: (name: string, newData: string) => void;
}

function Prompt({
  marketingCategory,
  validButton,
  productInfoData,
  productInfoIsLoading,
  onUpdateData,
}: PromptProps) {
  if (productInfoIsLoading) {
    const promptSize = 150;

    return (
      <ContentLoader
        title="AI에게 요청할 프롬프트를 불러오고 있습니다..."
        type="prompt"
        skeletonSize={promptSize}
      />
    );
  }

  const productInfoPrompt = createProductInfoPrompt(
    productInfoData as ProductInfoRes,
  );

  return (
    <PromptForm
      marketingCategory={marketingCategory}
      validButton={validButton}
      productInfoPrompt={productInfoPrompt}
      onUpdateData={onUpdateData}
    />
  );
}

export default Prompt;
