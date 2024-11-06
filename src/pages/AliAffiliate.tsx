import React from 'react';
import { Box, Skeleton } from '@mui/material';
import ProductInfo from 'components/ProductInfo';
import TitleTypography from 'components/ui/TitleTypography';
import KeywordForm from 'components/KeywordForm';
import PromptForm from 'components/PromptForm';
import { useLifting } from 'hooks/useLifting';
import { useLoading } from 'hooks/useLoading';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';
import ContentLoader from 'components/ContentLoader';

export interface LiftingDatas {
  productInfos: null | any[];
  aiScript: null | string;
}

export interface Loadings {
  productInfos: boolean;
  aiScript: boolean;
}

function AliAffiliate() {
  const { deviceWidth } = useDeviceWidthStore();
  const isMobile = deviceWidth <= 600;
  const cardSize = isMobile ? 125 : 180;
  const promptSize = 150;

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

  const loadProductInfoAndPromptForm = loadings.productInfos;
  const showProductInfoAndPromptForm =
    !loadings.productInfos && !!datas.productInfos;

  const loadAiScript = loadings.aiScript;
  const showAiScript = !loadings.aiScript && !!datas.aiScript;

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
          validButton={!loadings.productInfos}
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
      </Box>
    </Box>
  );
}

export default AliAffiliate;
