import React from 'react';
import { Box, Button } from '@mui/material';
import ContentTitle from './ui/ContentTitle';
import ContentContainer from './ui/ContentContainer';
import ProductInfoCard from './ProductInfoCard';
import ContentLoader from './ContentLoader';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';
import { ProductInfoRes } from 'types/productInfo';
import { createTextByMarketingCategory } from 'utils/createTextByCategory';
import { MarketingCategory } from 'types/marketingCategory';

interface ProductInfoProps {
  marketingCategory: MarketingCategory;
  productInfoData: ProductInfoRes | undefined;
  productInfoIsLoading: boolean;
}

function ProductInfo({
  marketingCategory,
  productInfoData,
  productInfoIsLoading,
}: ProductInfoProps) {
  const { isMobile } = useDeviceWidthStore();
  const cardSize = isMobile ? 125 : 180;
  const textByCategory = createTextByMarketingCategory(marketingCategory);

  if (productInfoIsLoading) {
    return (
      <ContentLoader
        title={`${textByCategory}에서 입력된 키워드의 상품정보를 추출하고 있습니다...`}
        type="card"
        skeletonSize={cardSize}
      />
    );
  }

  if (!productInfoData) {
    return null;
  }

  return (
    <Box>
      <ContentTitle title={`${textByCategory}에서 키워드로 추출한 상품 정보`} />
      <ContentContainer>
        {productInfoData &&
          productInfoData.productInfos?.map((item, index) => (
            <ProductInfoCard key={index} item={item} cardSize={cardSize} />
          ))}
        <Button variant="outlined" size="large">
          상품 이미지 저장하기
        </Button>
      </ContentContainer>
    </Box>
  );
}

export default ProductInfo;
