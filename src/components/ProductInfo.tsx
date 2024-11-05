import React from 'react';
import { Box, Skeleton } from '@mui/material';
import ContentTitle from './ui/ContentTitle';
import ContentContainer from './ui/ContentContainer';
import ProductInfoCard from './ProductInfoCard';

interface ProductInfoProps {
  productInfos: any[] | null;
  cardSize: number;
}

function ProductInfo({ productInfos, cardSize }: ProductInfoProps) {
  if (!productInfos) {
    return null;
  }

  return (
    <Box>
      <ContentTitle title="키워드로 추출한 상품 정보" />
      <ContentContainer>
        {productInfos.map((item, index) => (
          <ProductInfoCard key={index} item={item} cardSize={cardSize} />
        ))}
      </ContentContainer>
    </Box>
  );
}

export default ProductInfo;
