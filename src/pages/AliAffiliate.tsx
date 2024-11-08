import React from 'react';
import { Box, Button, Skeleton } from '@mui/material';
import ProductInfo from 'components/ProductInfo';
import TitleTypography from 'components/ui/TitleTypography';
import KeywordForm from 'components/KeywordForm';
import PromptForm from 'components/PromptForm';
import { useLifting } from 'hooks/useLifting';
import { useLoading } from 'hooks/useLoading';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';
import ContentLoader from 'components/ContentLoader';
import AiScript from 'components/AiScript';
import FlexibleSubmitButton from 'components/ui/FlexibleSubmitButton';

export interface AliProductInfo {
  title: string;
  discountRate: string;
  originPrice: string;
  titlePrice: string;
  reviews: string[];
}

export interface LiftingDatas {
  productInfos: null | AliProductInfo[];
  aiScript: null | string;
}

export interface Loadings {
  productInfos: boolean;
  aiScript: boolean;
}

function AliAffiliate() {
  const { isMobile } = useDeviceWidthStore();
  const cardSize = isMobile ? 125 : 180;
  const promptSize = 150;
  const scriptSize = 200;

  const { datas, handleUpdateData } = useLifting<LiftingDatas>({
    initialDatas: {
      productInfos: null,
      aiScript: null,
    },
  });
  const { loadings, handleToggleLoading } = useLoading<Loadings>({
    initialLoadings: {
      productInfos: false,
      aiScript: false,
    },
  });

  const isExistProductInfos = !!datas.productInfos;
  const isExistAiScript = !!datas.aiScript;

  const isLoadingProductInfos = loadings.productInfos;
  const isLoadingAiScript = loadings.aiScript;

  const loadProductInfoAndPromptForm = isLoadingProductInfos;
  const showProductInfoAndPromptForm =
    !isLoadingProductInfos && isExistProductInfos;

  const loadAiScript = isLoadingAiScript;
  const showAiScript = !isLoadingAiScript && isExistAiScript;

  return (
    <Box>
      <TitleTypography
        title="알리 어필리에이트 컨텐츠 생성하기"
        subTitle="AI를 사용해 알리 어필리에이트 제휴마케팅 컨텐츠를 생성하세요."
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5.5 }}>
        <KeywordForm
          name="productInfos"
          onUpdateData={handleUpdateData}
          onToggleLoading={handleToggleLoading}
          valid={!isLoadingProductInfos && !isExistProductInfos}
        />
        {loadProductInfoAndPromptForm && (
          <>
            <ContentLoader
              title="알리에서 입력된 키워드의 상품정보를 추출하고 있습니다..."
              type="card"
              skeletonSize={cardSize}
            />
            <ContentLoader
              title="AI에게 요청할 프롬프트를 불러오고 있습니다..."
              type="prompt"
              skeletonSize={promptSize}
            />
          </>
        )}
        {showProductInfoAndPromptForm && (
          <>
            <ProductInfo
              productInfos={datas.productInfos}
              cardSize={cardSize}
            />
            <PromptForm
              name="aiScript"
              onUpdateData={handleUpdateData}
              onToggleLoading={handleToggleLoading}
              validButton={!loadings.aiScript}
            />
          </>
        )}
        {loadAiScript && (
          <ContentLoader
            title="AI가 알리 상품 제휴마케팅에서 사용될 스크립트를 작성하고 있습니다..."
            type="script"
            skeletonSize={scriptSize}
          />
        )}
        {showAiScript && <AiScript aiScript={datas.aiScript as string} />}
        {isExistProductInfos && (
          <FlexibleSubmitButton
            label="상품 키워드 다시 입력하기"
            valid
            type="outlined"
          />
        )}
      </Box>
    </Box>
  );
}

export default AliAffiliate;
